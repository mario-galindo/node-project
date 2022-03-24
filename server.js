const express = require("express");

const app = express();
const { port, node_env } = require("./config");

app.get("/", (req, res) =>
  res.send([
    {
      id: 10,
      name: "Mario Galindo",
      username: "mgalindo",
      email: "mgalindo@devinhn.com",
      phone: "+505-9826-0414",
      environment: node_env,
      host: req.hostname,
    },
    {
      id: 12,
      name: "Victoria Loz",
      username: "vloz",
      email: "victoria@devinhn.com",
      phone: "+505-9726-0413",
      environment: node_env,
      host: req.hostname,
    },
    {
      id: 13,
      name: "Max Ham",
      username: "mham",
      email: "mham@devinhn.com",
      phone: "+505-9826-0412",
      environment: node_env,
      host: req.hostname,
    },
  ])
);

app.listen(port);
console.log(`Server on port: ${port}, Environment: ${node_env}`);
