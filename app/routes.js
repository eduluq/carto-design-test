var express = require("express");
var routes = express();

// Controller imports
var basicController = require("./controllers/basicController").basicController;

// Routes
routes.get("", basicController.get);
routes.get("/docs", basicController.getDocs);
routes.get("/docs/:article", basicController.getArticle);

exports.routes = routes;
