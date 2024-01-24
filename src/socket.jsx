import { io } from 'socket.io-client';

// @ts-ignore
export const socket = io(
    import.meta.env.VITE_SOCKET_URL, {
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