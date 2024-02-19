import { create } from "zustand";

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

export const useSelectedCam = ((set) => ({
    deviceId: null,
    label: "",
    selectDevice: (deviceId, label) => set({ deviceId, label }),
    clearDevice: () => set({ deviceId: null, label: "" }),
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
    setStream: (stream) => set({ stream }),
    clearStream: () => set((state) => {
        if (state.stream) {
            state.stream.getTracks().forEach((track) => track.stop());
        }
        return { stream: null }
    }),
}));