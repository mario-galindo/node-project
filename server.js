const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req, res) =>
  res.send(
    `<p>Node.js Backend <br><strong>Environment</strong> : ${NODE_ENV} <br><strong>Host</strong>: ${req.hostname}</p>`
  )
);

app.listen(PORT);
console.log(`Server on port: ${PORT}, Environment: ${NODE_ENV}`);
