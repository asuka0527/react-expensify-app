const path = require("path");

// create an express app
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "../", "public");

// 1. from heroku port or localhost 3000
const port = process.env.PORT || 3000;

// Specify where our files live to ser up our static assets
app.use(express.static(publicPath));

// * to match all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("server is up");
});

// node server/server.js
