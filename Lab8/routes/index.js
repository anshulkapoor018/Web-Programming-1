const resultRoute = require("./result");
const path = require("path");

const constructorMethod = app => {
  app.use("/result", resultRoute);
  

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./static/palindromeChecker.html"));
  });

};

module.exports = constructorMethod;