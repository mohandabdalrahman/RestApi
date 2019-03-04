const express = require("express");
const app = express();
const routes = require("./Routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

// connect to mongodb

mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(express.static("public"));
app.use("/api", routes);

// error handling

app.use(function(err, req, res, next) {
  res.send({ error: err.message });
});
// listen to port
app.listen(process.env.port || 4000, function() {
  console.log("Ready");
});
