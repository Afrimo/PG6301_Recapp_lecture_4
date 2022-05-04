import express from "express";
import { WebSocketServer } from "ws";

const application = express();

application.use(express.static("../client/dist"));

const wsServer = new WebSocketServer({ noServer: true });

const server = application.listen(process.env.PORT || 3000, () => {
  wsServer.on("connect", (socket) => {
    console.log("ws connected");
  });

  console.log(`http://localhost:${server.address().port}`);
  server.on("upgrade", (req, socket, head) => {
    wsServer.handleUpgrade(req, socket, head, (socket) => {
      wsServer.emit("connect", socket, req);
    });
  });
});
