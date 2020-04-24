const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session')
const bcrypt = require('bcryptjs');
const exphbs = require("express-handlebars");
const uData = require("./data/userData");

const data = require("./users");
const app = express();
const static = express.static(__dirname + "/public");

app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!...sshhhhhh',
  resave: false,
  saveUninitialized: true,
}))

app.use("/public", static);
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

var auth = "Not Authorized"

app.use(function(request, response, next) {
  console.log('Timestamp ' + new Date().toUTCString());
  console.log('Request Method: ' + request.method);
  console.log('Request Routes: ' + request.originalUrl);
  next();
  if(request.session) {
    if(!request.session.AuthCookie) {
      console.log("User is not Authorized yet!")
    }
    else {
      console.log("User is Authorized!");
    } 
  } else {
    if(request.originalUrl == '/logout')
      console.log('User has been logged out!');
    else
      console.log("User is not Authorized yet!")
  }
  console.log("---------------------------------------------------")
});

app.use("/private", function(req, res, next){
  if(!req.session.AuthCookie) {
    let hasErrors = true;
    let errors = [];
    errors.push("Not Logged In, Please Login");
    res.status(403).render("layouts/main", {hasErrors:hasErrors, errors: errors});
  }
  else {
    next();
  }
});

app.get("/", async (req, res) => {
  let hasErrors = false;
  let errors = [];
  let userId = req.session.AuthCookie;
  if(!userId) {
    auth = "Not Authorised User"
    errors.push("Not Authorised, Please Login");
    res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
  }
  else {
    auth = "Authorised User"
    res.redirect("/private");
  }
});

app.get("/private",async function(req, res){
  let hasErrors = true;
  let errors = [];
  if(!req.session.AuthCookie) {
    auth = "Not Authorised User"
    errors.push("Not Authorised, Please Login");
    res.status(403).render("layouts/main", {hasErrors:hasErrors, errors: errors});
  }
  else {
    auth = "Authorised User"
    let userId = req.session.AuthCookie;
    let userData = await uData.getUserData(userId);
    res.render("users/private",{layout:false , userdata:userData});
  }
});

app.post("/login", async (req, res) => {

  let hasErrors = false;
  let errors = [];
  let userId = req.session.AuthCookie;
  if(userId) {
    auth = "Authorised User"
    res.redirect("/private");
  }
  else {
    let userName = req.body.username;
	  console.log(userName);
    let password = req.body.password;
    user = data.users.find(element=>element.username === userName)
    if(!user) {
        auth = "Not Authorised User"
        hasErrors = true;
        errors.push("Invalid Username or Password");
        res.status(401);
        res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
    }
    else {
        let isSame = await bcrypt.compare(password, user.hashedPassword);
        if(!isSame) {
           auth = "Not Authorised User"
           hasErrors = true;
           errors.push("Invalid Username/Password");
           res.status(401);
           res.render("layouts/main", {hasErrors:hasErrors, errors: errors});
        }
        else {
          auth = "Authorised User"
          let userId = await uData.getUserId(userName);
          req.session.AuthCookie = userId;
          res.redirect("/private");
        }
    }
  }
});

app.get("/logout", async (req, res) => {
  req.session.destroy(function(err) {
    // cannot access session here
  })
  res.render("users/logout", {layout:false});
})

app.listen(3000, () => {
  console.log("We've now got a server!");
  if (process && process.send) process.send({done: true});
});