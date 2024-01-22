import React, { useEffect } from 'react';
import { socket } from '../socket.jsx';


export default function Socket() {
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


        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('server-id', onServerID);
        socket.on('error', onError);
        socket.on('connect_error', onError);
        socket.on('connect_timeout', onError);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('server-id', onServerID);
            socket.off('error', onError);
            socket.off('connect_error', onError);
            socket.off('connect_timeout', onError);
        };
    }, []);
    return (
        <div style={{visibility: "hidden"}}>
        </div>
    )
}