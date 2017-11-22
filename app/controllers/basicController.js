var basicController = {};

basicController.get = (req, res) => {
  res.render("index");
}

basicController.getDocs = (req, res) => {
  res.render("pages/docs");
}

basicController.getArticle = (req, res) => {
  console.log(req.params.article)
  res.render("pages/article");
}

exports.basicController = basicController;
