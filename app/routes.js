var express = require("express");
var routes = express();

// Controller imports
var basicController = require("./controllers/basicController").basicController;

/* Basic Routes */
routes.get("", basicController.get);

exports.routes = routes;
