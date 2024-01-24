import { useEffect } from "react";
import { webcam, useWebcam } from "./cam.jsx";

export function WebcamSetup() {
  const {
    selectDevice,
    setPermission,
    clearDevice,
    clearStream,
    setStream,
    stream,
  } = useWebcam();

  useEffect(() => {
    async function startStream() {
      const devices = await webcam.getDevices();
      let device;
      if (devices.length == 0) {
        console.warn("No video devices found");
        setPermission(false);
        return;
      }
      console.log(`Found ${devices.length} video devices`);
      if (devices.length == 1) device = devices[0];
      else {
        const backCam = devices.find((device) =>
          device.label.toLowerCase().includes("back")
        );
        device = backCam ? backCam : devices[0];
      }
      const stream = await webcam.getStream(device);
      selectDevice(device);
      setStream(stream);
      setPermission(true);
    }
    startStream();
    return () => {
      stream && webcam.releaseStream(stream);
      clearStream();
      clearDevice();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div style={{ display: "none" }} />;
}
