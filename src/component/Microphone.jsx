import { useEffect, useState } from "react";
import { addHandler, socket } from "../socket.jsx";
import { useWebcamCapture, useWebcam } from "./cam.jsx";
import { microphone, useMicrophone, useMicrophoneCapture } from "./mic.jsx";
import noAudio from "../assets/no-audio.wav";
import longAudio from "../assets/long-audio.wav";
import shortAudio from "../assets/short-audio.wav";

export function MicrophoneSetup() {
  const {
    stream,
    setStream,
    setPermission,
    selectDevice,
    clearDevice,
    clearStream,
  } = useMicrophone();
  useEffect(() => {
    async function setupDevice() {
      microphone.getDevices().then((devices) => {
        if (devices.length == 0) {
          console.warn("No audio devices found");
          setPermission(false);
          return;
        }
        console.log(`Found ${devices.length} audio devices`);
        const selected = devices[0];
        const stream = microphone.getStream(selected);
        selectDevice(selected);
        setStream(stream);
        setPermission(true);
      });
    }
    setupDevice();

    function onAudio(buffer) {
      console.log("Got audio");
      const blob = new Blob([buffer], { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    }
    function onUrl(url) {
      console.log("Got audio url");
      const audio = new Audio(url);
      audio.play();
    }

    function onNoAudio() {
      console.log("No audio");
      const audio = new Audio(noAudio);
      audio.play();
    }

    function onLongAudio() {
      console.log("Long audio");
      const audio = new Audio(longAudio);
      audio.play();
    }

    function onShortAudio() {
      console.log("Short audio");
      const audio = new Audio(shortAudio);
      audio.play();
    }

    const removeHandlers = [
      addHandler("audio", onAudio),
      addHandler("audio-url", onUrl),
      addHandler("no-audio", onNoAudio),
      addHandler("long-audio", onLongAudio),
      addHandler("short-audio", onShortAudio),
    ];

    return () => {
      removeHandlers.forEach((removeHandler) => removeHandler());
      microphone.releaseStream(stream);
      clearDevice();
      clearStream();
    };
  }, [
    clearDevice,
    clearStream,
    selectDevice,
    setPermission,
    setStream,
    stream,
  ]);
  return <div style={{ display: "none" }} />;
}

export default function Microphone() {
  const [isActive, setIsActive] = useState(false);
  const {
    capture: micCapture,
    capturing: micCapturing,
    clearCapture: clearMicCapture,
  } = useMicrophoneCapture();
  /**@type {[() => Blob, (a: () => Blob) => void]} */
  const [stopMicCapture, setStopMicCapture] = useState(null);
  const [micDevice, micStream] = useMicrophone((state) => [
    state.selectedDevice,
    state.stream,
  ]);
  const {
    capture: camCapture,
    capturing: camCapturing,
    clearCapture: clearCamCapture,
  } = useWebcamCapture();
  const [camDevice, camStream] = useWebcam((state) => [
    state.selectedDevice,
    state.stream,
  ]);
  /**@type {[MediaStream, (a: MediaStream) => void]} */
  const [recording, setRecording] = useState(false);
  /**
   * mic is disabled if there is no permission or no device
   */
  const micDisabled =
    (camCapturing && !micCapturing) || !(micDevice && camDevice);
  const className = isActive ? "btn active" : "btn";
  const micColor = isActive ? "#1016D8" : "black";

  useEffect(() => {
    if (recording && camDevice) {
      console.log("Getting clip");
      Promise.resolve(camStream).then((stream) => {
        camCapture(stream, 1000).then((clip) => {
          console.log("Got clip");
          clearCamCapture();
          console.log("Sending query");
          setRecording(null);
          console.log(clip);
          socket.emit("query", recording, clip, "url");
        });
      });
    }
  }, [recording, camDevice, camCapture, clearCamCapture, camStream]);

  async function startRecording() {
    if (micDisabled || isActive) return;
    if (!micStream) {
      const stop = micCapture(micStream);
      setStopMicCapture(() => stop);
      setIsActive(true);
    }
  }

  async function stopRecording() {
    if (micDisabled || !isActive) return;
    if (stopMicCapture) {
      const blob = stopMicCapture();
      clearMicCapture();
      setRecording(blob);
      setIsActive(false);
    }
  }

  return (
    <button
      id="speech"
      className={className}
      disabled={micDisabled}
      onMouseDown={startRecording}
      onMouseUp={stopRecording}
      onTouchStart={startRecording}
      onTouchEnd={stopRecording}
      onMouseLeave={stopRecording}
      onTouchCancel={setRecording}
    >
      <div
        className="pulse-ring"
        role="status"
        aria-label="Recording indicator"
      ></div>
      {/* <i className="fa fa-microphone" aria-hidden="true"></i> */}
      <div className="border w-[70%] h-[70%] flex items-center justify-center rounded-[30%] bg-[#ECDADA] shadow-lg">
        <svg
          width="40"
          height="47"
          viewBox="0 0 40 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Microphone"
        >
          <title>Microphone</title>
          <desc>
            {(() => {
              if (!isActive)
                return "Ready, hold to start recording, release to stop";
              if (isActive) return "Recording, release to stop";
              if (!(micDevice && camDevice))
                return "No microphone or camera detected";
              if (micDisabled) return "Microphone disabled";
            })()}
          </desc>
          <path
            d="M20.0007 28.8206C21.7688 28.8206 23.4645 28.0109 24.7147 26.5697C25.9649 25.1284 26.6673 23.1737 26.6673 21.1354L26.6673 11.5289C26.6673 9.4907 25.9649 7.53594 24.7147 6.09469C23.4645 4.65344 21.7688 3.84375 20.0007 3.84375C18.2325 3.84375 16.5368 4.65344 15.2866 6.09469C14.0364 7.53594 13.334 9.4907 13.334 11.5289L13.334 21.1354C13.334 23.1737 14.0364 25.1284 15.2866 26.5697C16.5368 28.0109 18.2325 28.8206 20.0007 28.8206ZM16.6673 11.5289C16.6673 10.5098 17.0185 9.53244 17.6436 8.81181C18.2688 8.09119 19.1166 7.68634 20.0007 7.68634C20.8847 7.68634 21.7326 8.09119 22.3577 8.81181C22.9828 9.53244 23.334 10.5098 23.334 11.5289L23.334 21.1354C23.334 22.1545 22.9828 23.1319 22.3577 23.8525C21.7326 24.5732 20.8847 24.978 20.0007 24.978C19.1166 24.978 18.2688 24.5732 17.6436 23.8525C17.0185 23.1319 16.6673 22.1545 16.6673 21.1354L16.6673 11.5289Z"
            fill={micColor}
          />
          <path
            d="M31.6673 21.1361C31.6673 20.6266 31.4917 20.1379 31.1792 19.7776C30.8666 19.4173 30.4427 19.2148 30.0007 19.2148C29.5586 19.2148 29.1347 19.4173 28.8221 19.7776C28.5096 20.1379 28.334 20.6266 28.334 21.1361C28.334 23.6839 27.456 26.1274 25.8932 27.9289C24.3304 29.7305 22.2108 30.7426 20.0007 30.7426C17.7905 30.7426 15.6709 29.7305 14.1081 27.9289C12.5453 26.1274 11.6673 23.6839 11.6673 21.1361C11.6673 20.6266 11.4917 20.1379 11.1792 19.7776C10.8666 19.4173 10.4427 19.2148 10.0007 19.2148C9.55862 19.2148 9.1347 19.4173 8.82214 19.7776C8.50958 20.1379 8.33398 20.6266 8.33398 21.1361C8.33727 24.3675 9.34966 27.4894 11.186 29.9308C13.0222 32.3722 15.5597 33.9699 18.334 34.4315L18.334 38.4278L14.8173 38.4278C14.4239 38.4278 14.0466 38.608 13.7684 38.9286C13.4903 39.2493 13.334 39.6842 13.334 40.1378L13.334 40.5604C13.334 41.014 13.4903 41.4489 13.7684 41.7696C14.0466 42.0902 14.4239 42.2704 14.8173 42.2704L25.184 42.2704C25.5774 42.2704 25.9547 42.0902 26.2329 41.7696C26.511 41.4489 26.6673 41.014 26.6673 40.5604L26.6673 40.1378C26.6673 39.6842 26.511 39.2493 26.2329 38.9286C25.9547 38.608 25.5774 38.4278 25.184 38.4278L21.6673 38.4278L21.6673 34.4315C24.4416 33.9699 26.9791 32.3722 28.8154 29.9308C30.6516 27.4894 31.664 24.3675 31.6673 21.1361Z"
            fill={micColor}
          />
        </svg>
      </div>
    </button>
  );
}
