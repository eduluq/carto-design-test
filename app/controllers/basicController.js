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

      console.log("Error reading file")
      var html = "<h1>Sorry! Something bad happened</h1>"
      html += "<h2>We don't find the file you're looking for."
      html += "<p>Please, if you think there is an error, <a class=\"link\">contact us</a> and we'll fix it."

      res.render("pages/article", {
        menu: menu,
        content: html
      });

    }

    else {
      var sections = data.split('\n\n\n');
      var content = "";
      for (var i = 0; i < sections.length; i++) {
        var html = marked(sections[i]);
        console.log(html)
        var aux = "<section>" + html + "</section>"
        content += aux
      }

      res.render("pages/article", {
        menu: menu,
        content: content
      });

    }

  });

}

exports.basicController = basicController;
