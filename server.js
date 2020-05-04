const express = require("express");
const helmet = require("helmet")
const projectRouter = require("./routers/projectRouter");
const resourceRouter = require("./routers/resourceRouter");
const server = express();

server.get("/", (req, res) => {
    res.send("The API is Up");
  });
server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter);
server.use("/api/resources",  resourceRouter);

module.exports = server;
