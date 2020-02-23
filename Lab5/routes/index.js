const myRoutes = require("./about");
const educationRoute = require("./education");
const storyRoute = require("./story");

const constructorMethod = app => {

    app.use("/about", myRoutes);
    app.use("/story", storyRoute);
    app.use("/education",educationRoute);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;