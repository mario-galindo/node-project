const express = require("express");
const app = express();
const { port, node_env } = require("./config");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.get("/users", (req, res) => {
  console.log("sending response!");
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
      phone: "+505-9726-0513",
      environment: node_env,
      host: req.hostname,
    },
    {
      id: 13,
      name: "Max Ham",
      username: "mham",
      email: "mham@devinhn.com",
      phone: "+505-9826-0410",
      environment: node_env,
      host: req.hostname,
    },
  ]);
});

app.get("/api/v1", (req, res) => res.status(200).send("Status: Ok"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);
console.log(`Server on port: ${port}, Environment: ${node_env}`);
