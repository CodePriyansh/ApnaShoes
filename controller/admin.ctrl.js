const { required } = require("nodemon/lib/config");
const Admin = require('../model/admin.js')

exports.adminLoginPage = (req, res) => {
  res.render("../Views/Admin-Pages/admin_login.ejs");
};

exports.adminLoginPost = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let admin = new Admin(email,password);
  admin
    .checkAdmin()
    .then((results) => {
        console.log(results);
      if (results.length > 0) {
        //    req.session.current_user = email;
        res.render("../Views/Admin-Pages/admin-home.ejs");
      } else console.log("Login Failed...");
    })
    .catch((err) => {
      console.log(err);
    });
};
