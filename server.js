const express = require("express");

const app = express();
const { port, node_env } = require("./config");

app.get("/", (req, res) =>
  res.send([
    {
      id: 1,
      name: "Mario Galindo",
      username: "mgalindo",
      email: "mgalindo@devinhn.com",
      phone: "+504-9826-415",
      environment: node_env,
      host: req.hostname,
    },
    {
      id: 2,
      name: "Victoria Loz",
      username: "vloz",
      email: "victoria@devinhn.com",
      phone: "+505-9726-415",
      environment: node_env,
      host: req.hostname,
    },
    {
      id: 3,
      name: "Max Ham",
      username: "mham",
      email: "mham@devinhn.com",
      phone: "+503-9826-475",
      environment: node_env,
      host: req.hostname,
    },
  ])
);

app.listen(port);
console.log(`Server on port: ${port}, Environment: ${node_env}`);
