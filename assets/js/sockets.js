import { handleNewMsg } from "./chat";
import { handelNewUser, handleDisconnected } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handelNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
  aSocket.on(events.newMsg, handleNewMsg);
};
