import io from "./service.js";
import { recordEventsDocument } from "./socket/recordEventsDocument.js";
import { recordInitialEvent } from "./socket/recordInitialEvents.js";
io.on("connection", (socket) => {
  console.log(`Socket conneted`);
  socket.on("disconnect", () => {
    console.log("Usuário desconectado ");
  });
  recordInitialEvent(socket, io);
  recordEventsDocument(socket, io);
});