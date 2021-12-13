const express = require("express");

const app = express();
const { port, node_env } = require("./config");

app.get("/", (req, res) =>
  res.send(
    `<p>Node.js Backend <br><strong>Environment</strong> : ${node_env} <br><strong>Host</strong>: ${req.hostname}</p>`
  )
);

app.listen(port);
console.log(`Server on port: ${port}, Environment: ${node_env}`);
