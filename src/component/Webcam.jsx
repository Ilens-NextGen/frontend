import { useEffect } from "react"
import { Webcam as webcam, useWebcam } from "./camState"


export default function Webcam() {
    const { selectDevice, setPermission } = useWebcam();

    useEffect(() => {
        async function startStream() {

            const devices = await webcam.getDevices();
            let device;
            if (devices.length == 0) {
                console.log("No video devices found");
                return;
            }
            console.log(`Found ${devices.length} video devices`);
            if (devices.length == 1)
                device = devices[0];
            else {
                const backCam = devices.find((device) => device.label.toLowerCase().includes("back"));
                if (backCam)
                    device = backCam;
                else
                    device = devices[0];
            }
            selectDevice(device);
            setPermission(await webcam.hasPermission());
        }
        startStream();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
    return (
        <div style={{visibility: "hidden"}}/>
    )
}