import { create } from "zustand";
// import zukeeper from "zukeeper";

export const microphone = {
  /**@private */
  _hasPermission: null,

  /**
   * get an audio stream from a device
   * @param {MediaDeviceInfo} device
   * @returns {Promise<MediaStream>}
   * */
  getStream: async (device) => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { deviceId: device.deviceId },
    });
    console.log(
      `Got microphone stream '${stream.id.slice(0, 8)}...' for device '${
        device.label
      }'`
    );
    return stream;
  },

  /**
   * releases an audio stream
   * @param {MediaStream} stream
   * */
  releaseStream: (stream) => {
    console.log(`Releasing microphone stream '${stream.id.slice(0, 8)}...'`);
    stream.getTracks().forEach((track) => track.stop());
  },

  /**
   * @returns {Promise<MediaDeviceInfo[]>}
   */
  getDevices: async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === "audioinput");
  },
  /**
   * verifies that the user has given permission
   * to use the microphone
   * @returns {Promise<boolean>}
   */
  hasPermission: async function () {
    if (this._hasPermission === true) {
      console.log("Microphone permission already granted");
      return true;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      console.log("Microphone permission granted");
      this._hasPermission = true;
      return true;
    } catch (err) {
      console.error(err);
      console.log("Microphone permission denied");
      this._hasPermission = false;
      return false;
    }
  },
  /**
   * records audio from the microphone
   * @param {MediaStream} stream
   * @param {(blob: Blob) => void} callback
   * @returns {{start: () => void, stop: () => void}}
   */
  record: (stream, callback) => {
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = (ev) => {
      console.log("Got audio data", ev.data);
      if (ev.data.size > 0) chunks.push(ev.data);
    };
    recorder.onerror = (err) => {
      console.error(`Microphone error: ${err}`);
    };
    recorder.onstart = () => {
      console.log("Started recording audio");
    };
    recorder.onstop = () => {
      console.log("Stopped recording audio");
      const blob = new Blob(chunks, { type: recorder.mimeType });
      console.log("Audio blob", blob);
      chunks.length = 0;
      callback(blob);
    };
    return {
      start: () => recorder.start(),
      stop: () => recorder.stop()
    };
  },
};

/**@type {import("./types").MicrophoneCaptureState} */
export const useMicrophoneCapture = create((set) => ({
  captured: null,
  capturing: false,
  capture: (stream, callback) => {
    const { start, stop } = microphone.record(stream, callback);
    start();
    set({ capturing: true });
    return () => {
      stop();
      set({ capturing: false });
    };
  },
  clearCapture: () => set({ captured: null, capturing: false }),
}));

/**@type {import("./types").MicrophoneState} */
export const useMicrophone = create((set) => ({
  hasPermission: null,
  selectedDevice: null,
  stream: null,
  selectDevice: (device) => set({ selectedDevice: device }),
  clearDevice: () => set({ selectedDevice: null }),
  setStream: (stream) => set({ stream }),
  clearStream: () => set({ stream: null }),
  setPermission: (hasPermission) => set({ hasPermission }),
}));

window.useMicrophone = useMicrophone;
