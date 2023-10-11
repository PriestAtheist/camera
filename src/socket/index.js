import {io} from 'socket.io-client';

const options = {
    "force new conection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
}

const socket = io('https://priestatheist.github.io/camera/', options);

export default socket;