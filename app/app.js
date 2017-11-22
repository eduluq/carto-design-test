//Dependencies
var express = require("express");
var path = require("path");

//Init app
var app = express();

//Load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Static Files
app.use(express.static(path.join(__dirname, "../public")));

//Api routes
var routes = require("./routes.js").routes;
app.use("/", routes);

//Init server
var port = 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
