const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Enable CORS for all origins
server.use(cors());

server.use(middlewares);
server.use(router);
server.listen(port);
