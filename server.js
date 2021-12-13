const express = require("express");

const app = express();
const { port, node_env } = require("./config");

app.get("/", (req, res) =>
  res.send([
    {
      Name: "Mario",
      City: "Berlin",
      Environment: node_env,
      Host: req.hostname,
    },
    {
      Name: "Daniela",
      City: "Miami",
      Environment: node_env,
      Host: req.hostname,
    },
    {
      Name: "Thomas",
      City: "Hamburg",
      Environment: node_env,
      Host: req.hostname,
    },
  ])
);

app.listen(port);
console.log(`Server on port: ${port}, Environment: ${node_env}`);
