//Dependencies
var fs = require("fs");
var path = require("path")
var marked = require('marked');

var basicController = {};

basicController.get = (req, res) => {
  res.render("index");
}

basicController.getDocs = (req, res) => {
  res.render("pages/docs");
}

basicController.getArticle = (req, res) => {

  //Menu
  var menu = [{title: "Home", files: []}, {title: "Client Libraries", files: ["CARTO.js", "Getting Started", "General Concepts", "Named Maps", "Specific UI Functions", "Events", "API Reference"]},{title: "Location Data Services", files: ["Routing"]},{title: "Builder",files: ["Static", "Tiles", "WMS"]}];

  //Get markdown from file
  var file = req.params.article.slice(1);
  var filePath = path.join(__dirname, "../../data/") + file + ".txt";
  fs.readFile(filePath, "utf8", (err, data) => {

    if(err) {
      console.log("error reading file");
    }

    else {

      var sections = data.split('\n\n\n');
      var html = "";
      for (var i = 0; i < sections.length; i++) {
        var aux = "<section>" + marked(sections[i]) + "</section>"
        html += aux
      }

      res.render("pages/article", {
        menu: menu,
        content: html
      });
    }

  });

}

exports.basicController = basicController;
