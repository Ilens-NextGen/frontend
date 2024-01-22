import { create } from "zustand";

export async function loadVideoDevices() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach((track) => track.stop());
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter((device) => device.kind === "videoinput");
    } catch (err) {
        console.error(err);
        return [];
    }
}


/**
 * 
 * @param {MediaStream} stream 
 * @param {int} duration 
 * @returns {Promise<Blob>}
 */
export function grabClip(stream, duration) {
    return new Promise((resolve, reject) => {
        const recorder = new MediaRecorder(stream);
        const chunks = [];
        recorder.ondataavailable = (ev) => {
            chunks.push(ev.data);
        };
        recorder.onstop = () => {
            resolve(new Blob(chunks, { type: "video/webm" }));
        }
        recorder.onerror = (err) => {
            console.error(err);
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

// type SelectedCamState = {
//     deviceId: string | null;
//     label: string;
//     selectDevice: (deviceId: string, label: string) => void;
//     clearDevice: () => void;
// }


// type WebCamCaptureState = {
//     captured: Blob | null;
//     capturing: boolean;
//     capture: (stream: MediaStream, duration: number) => Promise<Blob>;
//     clearCapture: () => void;
// }

// type MediaStreamState = {
//     stream: MediaStream | null;
//     setStream: (stream: MediaStream) => void;
//     clearStream: () => void;
// }

export const useSelectedCam = create((set) => ({
    deviceId: null,
    label: "",
    selectDevice: (deviceId, label) => {
        console.log(`Selected camera (${label})`);
        return set({ deviceId, label })
    },
    clearDevice: () => {
        console.log("Cleared camera");
        return set({ deviceId: null, label: "" })
    },
}));

export const useWebcamCapture = create((set) => ({
    captured: null,
    capturing: false,
    capture: async (stream, duration) => {
        set({ capturing: true });
        const clip = await grabClip(stream, duration);
        set({ captured: clip, capturing: false });
        return clip;
    },
    clearCapture: () => set({ captured: null, capturing: false }),
}));


export const useWebcamStream = create((set) => ({
    stream: null,
    canStream: false,
    setStream: (stream) => set({ stream }),
    clearStream: () => set((state) => {
        if (state.stream) {
            state.stream.getTracks().forEach((track) => track.stop());
        }
        console.log("Cleared webcam stream");
        return { stream: null }
    }),
    startStream: async (deviceId) => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId } });
        set({ stream });
        console.log("Started webcam stream");
        return stream;
    },
    setCanStream: (canStream) => set({ canStream }),
}));