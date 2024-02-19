import { useEffect, useState } from "react";
import { socket } from "../socket.jsx";
import { useWebcamCapture, useWebcamStream } from "./camState.jsx";
import { useMicRecorder } from "./micState.jsx";
import noAudio from "../assets/no-audio.wav";
import longAudio from "../assets/long-audio.wav";
import shortAudio from "../assets/short-audio.wav";


export default function Microphone() {
    const [isActive, setIsActive] = useState(false);
    const { getRecorder, recorder, start, stop, blob, recording } = useMicRecorder();
    const { capture, capturing } = useWebcamCapture();
    const webcamStream = useWebcamStream((state) => state.stream);
    const micDisabled = (capturing && !recording) || !webcamStream;

    useEffect(() => {
        function onAudio(buffer) {
            console.log("Got audio");
            // console.log(buffer);
            const blob = new Blob([buffer], { type: "audio/wav" });
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            audio.play();
        }
        function onUrl(url) {
            console.log("Got url");
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

        socket.on("audio", onAudio);
        socket.on("audio-url", onUrl);
        socket.on("no-audio", onNoAudio);
        socket.on("long-audio", onLongAudio);
        socket.on("short-audio", onShortAudio);
        return () => {
            socket.off("audio", onAudio);
            socket.off("audio-url", onUrl);
            socket.off("no-audio", onNoAudio);
            socket.off("long-audio", onLongAudio);
            socket.off("short-audio", onShortAudio);
        }
    }, []);

    useEffect(() => {
        async function startRecording() {
            if (!recorder) {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
                getRecorder(stream);
            }
            start();
        }
        async function stopRecording() {
            stop();
        }
        if (isActive && !recording) {
            startRecording();
        } else if (!isActive && recording) {
            stopRecording();
        }
    }, [isActive]);

    useEffect(() => {
        if (blob) {
            // console.log(blob);
            // const audio = new Audio(URL.createObjectURL(blob));
            // audio.play();
            capture(webcamStream, 1000).then((clip) => {
                console.log("Got clip");
                console.log("Sending query");
                socket.emit("query", blob, clip, "url");
            });
        }
    }, [blob]);
    
    function startRecording() {
        !micDisabled && setIsActive(true);
    }

    function stopRecording() {
        !micDisabled && setIsActive(false);
    }

    return (
        <button id="speech" className={"btn" + isActive ? " active" : ""} disabled={micDisabled}
            onMouseDown={startRecording} onMouseLeave={stopRecording} onMouseUp={stopRecording}
            onTouchStart={startRecording} onTouchEnd={stopRecording} onTouchCancel={stopRecording}>
            <div className="pulse-ring"></div>
            <i className="fa fa-microphone" aria-hidden="true"></i>
        </button>
    )

}
