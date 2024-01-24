import { addHandler, socket } from "../socket";
import { useEffect, useState } from "react";
import { useWebcamCapture, useWebcam, webcam } from "./cam";

export default function Monitoring() {
  const [isActive, setIsActive] = useState(false);
  const { capture, capturing, clearCapture } = useWebcamCapture();
  const { selectedDevice, setStream, stream, clearStream } = useWebcam();
  const [intervalId, setIntervalId] = useState(null);
  const disabled = (capturing && !isActive) || !selectedDevice;
  const classes =
    "group h-[80px] w-[80px] p-2 rounded-full bg-white disabled:cursor-not-allowed" +
    (isActive ? " active border-2 border-black" : "");

  useEffect(() => {
    function onDetections(detections) {
      console.log("Got detections");
      console.log(detections);
      let utterance = new SpeechSynthesisUtterance(detections);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    }
    return addHandler("detection", onDetections);
  }, []);

  async function startMonitoring() {
    if (!selectedDevice) return;
    console.log("Starting monitoring");
    setIsActive(true);
    const stream = await webcam.getStream(selectedDevice);
    setStream(stream);
    async function sendClip() {
      // console.log(`stream active: ${stream.active}`)
      const clip = await capture(stream, 1000)
      console.log("Sending clip");
      socket.emit("detect", clip);
    }
    // sendClip();
    setTimeout(() => {
      sendClip();
      const id = setInterval(sendClip, 5000);
      setIntervalId(id);
    }, 1500);
  }

  function stopMonitoring() {
    if (!selectedDevice) return;
    console.log("Stopping monitoring");
    clearInterval(intervalId);
    setIsActive(false);
    webcam.releaseStream(stream);
    clearStream();
    clearCapture();
  }

  function toggleMonitoring() {
    if (isActive) {
      stopMonitoring();
    } else {
      startMonitoring();
    }
  }
  return (
    <button
      className={classes}
      id="monitor"
      disabled={disabled}
      onClick={toggleMonitoring}
      aria-label={
        isActive
          ? "Stop monitoring"
          : disabled
          ? "Monitoring disabled"
          : "Start monitoring"
      }
    >
      <div className="bg-[#ECDADA] group-[.active]:bg-[#1016D8] rounded-3xl flex flex-col items-center justify-center p-2 shadow-lg">
        <svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Monitoring Icon"
        >
          <title>Monitoring Icon</title>
          <g clipPath="url(#clip0_476_801)">
            <path
              d="M19.5 3H5.5C4.70435 3 3.94129 3.31607 3.37868 3.87868C2.81607 4.44129 2.5 5.20435 2.5 6V14C2.5 14.7956 2.81607 15.5587 3.37868 16.1213C3.94129 16.6839 4.70435 17 5.5 17H11.5V19H7.5C7.23478 19 6.98043 19.1054 6.79289 19.2929C6.60536 19.4804 6.5 19.7348 6.5 20C6.5 20.2652 6.60536 20.5196 6.79289 20.7071C6.98043 20.8946 7.23478 21 7.5 21H17.5C17.7652 21 18.0196 20.8946 18.2071 20.7071C18.3946 20.5196 18.5 20.2652 18.5 20C18.5 19.7348 18.3946 19.4804 18.2071 19.2929C18.0196 19.1054 17.7652 19 17.5 19H13.5V17H19.5C20.2956 17 21.0587 16.6839 21.6213 16.1213C22.1839 15.5587 22.5 14.7956 22.5 14V6C22.5 5.20435 22.1839 4.44129 21.6213 3.87868C21.0587 3.31607 20.2956 3 19.5 3ZM20.5 14C20.5 14.2652 20.3946 14.5196 20.2071 14.7071C20.0196 14.8946 19.7652 15 19.5 15H5.5C5.23478 15 4.98043 14.8946 4.79289 14.7071C4.60536 14.5196 4.5 14.2652 4.5 14V6C4.5 5.73478 4.60536 5.48043 4.79289 5.29289C4.98043 5.10536 5.23478 5 5.5 5H19.5C19.7652 5 20.0196 5.10536 20.2071 5.29289C20.3946 5.48043 20.5 5.73478 20.5 6V14Z"
              className="fill-[#03030B] group-[.active]:fill-white group-disabled:fill-black"
            />
          </g>
          <defs>
            <clipPath id="clip0_476_801">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="font-bold text-xs group-[.active]:text-white">Monitor</p>
      </div>
    </button>
  );
}
