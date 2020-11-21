// build your server here
  
const express = require('express');

const server = express();

server.use(express.json())

const projectRouter = require("../api/project/router.js")

server.use(logger)

server.use("/api/projects", projectRouter)

server.get('/', (req, res) => {
  res.send(`<h2>"Woo! I'm alive!!!"</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`Method: ${req.method}, Timestamp: [${new Date().toISOString()}], Request URL: "${req.url}"`)
  next();
}

module.exports = server;