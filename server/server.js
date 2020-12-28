const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "../", "public");

// Specify where our files live
app.use(express.static(publicPath));

// * to match all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3000, () => {
  console.log("server is up");
});

// node server/server.js
