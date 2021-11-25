const express = require('express')

const app = express();

app.get('/',(req, res)=> res.send("<h1>Hello from node by HTML | new v2.2</h1>"))

app.listen(3000)
console.log("Server on port 3000")
