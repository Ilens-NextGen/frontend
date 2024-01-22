import { useEffect } from "react"
import { loadVideoDevices, useSelectedCam, useWebcamStream } from "./camState"


export default function Webcam() {
    const { selectDevice, clearDevice } = useSelectedCam();
    const { clearStream, startStream, setCanStream } = useWebcamStream();

    useEffect(() => {
        loadVideoDevices().then((devices) => {
            let deviceId, label;
            if (devices.length == 0) {
                console.log("No video devices found");
                return;
            }
            console.log(`Found ${devices.length} video devices`);
            if (devices.length == 1)
                [deviceId, label] = [devices[0].deviceId, devices[0].label];
            else {
                const backCam = devices.find((device) => device.label.toLowerCase().includes("back"));
                if (backCam)
                    [deviceId, label] = [backCam.deviceId, backCam.label];
                else
                    [deviceId, label] = [devices[0].deviceId, devices[0].label];
            }
            selectDevice(deviceId, label);
            startStream(deviceId);
            setCanStream(true);
            clearStream();
        });
    }, []);  
    return (
        <div style={{visibility: "hidden"}}/>
    )
}