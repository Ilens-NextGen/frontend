import { create } from "zustand";

export const webcam = {

    _hasPermission: null,

    /**
     * gets a video stream from a device id
     * @param {MediaDeviceInfo} device 
     * @returns {Promise<MediaStream>}
     */
    async getStream(device) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: device.id } });
        console.log(`Got webcam stream '${
            stream.id.slice(0, 8)
        }...' for device '${device.label}'`);
        return stream;
    },
    /**
     * releases a video stream
     * @param {MediaStream} stream 
     */
    releaseStream(stream) {
        console.log(`Releasing webcam stream '${stream.id.slice(0, 8)}...'`);
        stream.getTracks().forEach((track) => track.stop());
    },
    /**
     * returns a list of video devices
     * @returns {Promise<MediaDeviceInfo[]>}
     * */
    async getDevices() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter((device) => device.kind === "videoinput");
    },
    /**
     * checks if the browser has permission to use the webcam
     * @returns {Promise<boolean>}
     */
    async hasPermission() {
        // TODO: Use navigator.permissions.query() instead
        if (this._hasPermission === true) {
            console.log("Webcam permission already granted");
            return true;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach((track) => track.stop());
            console.log("Webcam permission granted");
            this._hasPermission = true;
            return true;
        } catch (err) {
            console.error(err);
            console.log("Webcam permission denied");
            this._hasPermission = false;
            return false;
        }
    },

    /**
        * 
        * @param {MediaStream} stream 
        * @param {int} duration 
        * @returns {Promise<Blob>}
        */
    record(stream, duration) {
        return new Promise((resolve, reject) => {
            const recorder = new MediaRecorder(stream);
            const chunks = [];
            recorder.ondataavailable = (ev) => {
                // console.log("Got video data", ev.data);
                chunks.push(ev.data);
            };
            recorder.onstop = () => {
                resolve(new Blob(chunks));
            }
            recorder.onerror = (err) => {
                console.error(err);
                recorder.stop();
                reject(err);
            }
            recorder.onstart = () => {
                console.log("Started recording video");
            }
            recorder.start();
            setTimeout(() => {
                recorder.stop();
                console.log("Stopped recording video");
            }, duration);
        });
    }
}

/**@type {import("./types").WebCamCaptureState} */
export const useWebcamCapture = create((set) => ({
    captured: null,
    capturing: false,
    capture: async (stream, duration) => {
        set({ capturing: true });
        const clip = await webcam.record(stream, duration);
        set({ capturing: false });
        return clip;
    },
    clearCapture: () => set({ captured: null, capturing: false }),
}));

/**@type {import("./types").WebCamState}*/
export const useWebcam = create((set) => ({
    hasPermission: null,
    selectedDevice: null,
    stream: null,
    selectDevice: async (device) => {
        set({ selectedDevice: device });
    },
    clearDevice: () => set({ selectedDevice: null }),
    setStream: (stream) => set({ stream }),
    clearStream: () => set({ stream: null }),
    setPermission: (hasPermission) => set({ hasPermission }),
}));