import { io } from 'socket.io-client';

// @ts-ignore
const URL = import.meta.env.VITE_SOCKET_URL;
// @ts-ignore
export const socket = io(
    URL, {
    transports: ['websocket', 'polling', 'flashsocket'],
    }
);

export function addHandler() {
    
}