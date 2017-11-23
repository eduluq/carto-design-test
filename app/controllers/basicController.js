//Dependencies
var fs = require("fs");
var path = require("path")
var marked = require('marked');

var basicController = {};

//Index route
basicController.get = (req, res) => {
  res.render("index");
}

//Docs route
basicController.getDocs = (req, res) => {
  //Get config file to render docs page
  var configPath = path.join(__dirname, "../../data/");
  var config = require(configPath + "config").config;
  res.render("pages/docs", {
    config: config
  });
}

//Get article route
basicController.getArticle = (req, res) => {

  var dir = req.params.dir.slice(1);
  var file = req.params.article.slice(1);

  //Get menu from config
  var configPath = path.join(__dirname, "../../data/" + dir + "/");
  var menu = require(configPath + "config").config

  //Get markdown from file
  var filePath = path.join(__dirname, "../../data/") + dir + "/" + file + ".txt";
  fs.readFile(filePath, "utf8", (err, data) => {

    //Error reading file
    if(err) {

      console.log("Error reading file")
      var html = "<h1>Sorry! Something bad happened</h1>"
      html += "<h2>We don't find the file you're looking for."
      html += "<p>Please, if you think there is an error, <a class=\"link\">contact us</a> and we'll fix it."

      res.render("pages/article", {
        directory: dir,
        menu: menu,
        content: html
      });

    }

    //Style and parse markdown text
    else {
      var sections = data.split('\n\n\n');
      var content = "";
      for (var i = 0; i < sections.length; i++) {
        var html = marked(sections[i]);

        //Add class link to links
        html = html.replace("<a", "<a class=link");

        //Add image to info box
        var tag = "<div class=\"info-box\">";
        var iconElement = "<div class=\"info-box__icon\"> <img src=/images/info.png> </div>"
        html = html.replace(tag, tag + iconElement)

        //Create section
        var aux = "<section>" + html + "</section>"
        content += aux
      }

      //Render
      res.render("pages/article", {
        directory: dir,
        menu: menu,
        content: content
      });

    }

  });

}

exports.basicController = basicController;
