const constructorMethod = app => {
    app.use("/", (req, res) => {
        res.render("palinChecker/index");
    });
    
    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethod;