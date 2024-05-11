const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("All is right");
});

app.get("/healthcheck", (req, res) => {
  res.send("All is right");
});

app.get("/api/message", (req, res) => {
  console.log("/api/message called");
  res.json({ message2: "Response from backend2" });
});

const port = process.env.PORT || 3002;

const server = http.createServer(app);
server.listen(port, () => console.log(`Server is running on port ${port}`));
