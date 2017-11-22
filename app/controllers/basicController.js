var basicController = {};

basicController.get = (req, res) => {
  res.render("index")
};

exports.basicController = basicController;
