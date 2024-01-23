import { useEffect } from 'react';
import { addHandler, socket } from '../socket.jsx';


export default function SocketSetup() {
    useEffect(() => {
        function onConnect() {
            console.log('Connected to server');
        }

        function onServerID(serverID) {
            console.log(`Connected to server ${serverID}`);
        }

        function onDisconnect() {
            console.log('Disconnected from server');
        }

        function onError(err) {
            console.error(err);
        }

        const removeHandlers = [
            addHandler('connect', onConnect),
            addHandler('disconnect', onDisconnect),
            addHandler('server-id', onServerID),
            addHandler('error', onError),
            addHandler('connect_error', onError),
            addHandler('connect_timeout', onError),
        ];
        if (!socket.connected) {
            socket.connect();
        }

        return () => {
            removeHandlers.forEach((removeHandler) => removeHandler());
        };
    }, []);
    return (
        <div style={{display: "none"}}>
        </div>
    )
}