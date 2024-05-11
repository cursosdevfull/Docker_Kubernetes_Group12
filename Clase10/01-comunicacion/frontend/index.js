const express = require("express");
const cors = require("cors");
const http = require("http");

const PATH_BACKEND1 =
  process.env.SERVICE_BACKEND1 || "http://localhost:3001/api/message";

const app = express();
app.use(cors());

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("All is right");
});

app.get("/healthcheck", (req, res) => {
  res.send("All is right");
});

app.get("/api/config", (req, res) => {
  res.json({ path: PATH_BACKEND1 });
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => console.log(`Server is running on port ${port}`));
