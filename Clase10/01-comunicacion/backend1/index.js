const express = require("express");
const cors = require("cors");
const http = require("http");
const axios = require("axios");

const app = express();
app.use(cors());

const PATH_BACKEND2 =
  process.env.SERVICE_BACKEND2 || "http://localhost:3002/api/message";

app.get("/", (req, res) => {
  res.send("All is right");
});

app.get("/healthcheck", (req, res) => {
  res.send("All is right");
});

app.get("/api/message", async (req, res) => {
  const messageFromBackend2 = await axios.get(PATH_BACKEND2);

  res.json({ message1: "Response from backend1", ...messageFromBackend2.data });
});

const port = process.env.PORT || 3001;

const server = http.createServer(app);
server.listen(port, () => console.log(`Server is running on port ${port}`));
