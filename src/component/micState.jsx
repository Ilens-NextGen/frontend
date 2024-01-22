import { create } from "zustand";


export async function recordMicrophone() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    function start() {
        if (recorder.state === "recording") {
            return;
        }
        recorder.start();
    }
    function stop() {
        if (recorder.state !== "inactive") {
            stream.getAudioTracks()[0].stop();
            recorder.stop();
        }
        return new Blob(chunks, { type: "audio/webm" });
    }
    recorder.ondataavailable = (ev) => {
        console.log("Got data");
        chunks.push(ev.data);
    }
    recorder.onerror = (err) => {
        console.error(err);
        stop();
    }
    recorder.onstart = () => {
        console.log("Started recording audio");
    }
    recorder.onstop = () => {
        console.log("Stopped recording audio");
    }
    return { start, stop };
}


// type MicRecorderState = {
//     recorder: MediaRecorder | null;
//     recording: boolean;
//     blob: Blob | null;
//     getRecorder: (stream: MediaStream) => void;
//     start: () => void;
//     stop: () => void;
//     clear: () => void;
// }

export const useMicRecorder = create((set) => {
    return {
        recorder: null,
        recording: false,
        blob: null,
        getRecorder: (stream) => set((state) => {
            if (state.recorder) {
                return {}
            }
            const recorder = new MediaRecorder(stream);
            const chunks = [];
            recorder.ondataavailable = (ev) => {
                console.log("Got data");
                chunks.push(ev.data);
            };
            recorder.onstop = () => {
                console.log("Stopped recording");
                set({ blob: new Blob(chunks, { type: "audio/webm" }) });
                stream.getAudioTracks()[0].stop();
            }
            recorder.onerror = (err) => {
                console.error(err);
            }
            recorder.onstart = () => {
                console.log("Started recording");
            }
            return { recorder };
        }),
        start: () => set((state) => {
            if (state.recorder) {
                state.recorder.start();
            }
            return { recording: true };
        }),
        stop: () => set((state) => {
            if (state.recorder) {
                state.recorder.stop();
            }
            return { recording: false, recorder: null };
        }),
        clear: () => set((state) => {
            if (state.recorder) {
                state.recorder.stop();
            }
            return { recorder: null, recording: false, blob: null };
        }),
    }
});