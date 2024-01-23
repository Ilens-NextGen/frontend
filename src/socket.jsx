import { io } from 'socket.io-client';

// @ts-ignore
const URL = import.meta.env.VITE_SOCKET_URL;
// @ts-ignore
export const socket = io(
    URL, {
    transports: ['websocket', 'polling', 'flashsocket'],
    autoConnect: false,
    }
);

/**
 * @param {string} event
 * @param {(...args: any[])} handler
 * 
 * @returns {() => void} remove handler
 */
export function addHandler(event, handler) {
    if (socket.listeners(event).filter((l) => l === handler).length > 0) {
        return () => {};
    }
    socket.on(event, handler);
    return () => socket.off(event, handler);
}