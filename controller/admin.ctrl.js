const { required } = require("nodemon/lib/config");
const Admin = require("../model/admin.js");

exports.adminHomePage = (req,res) =>{
  res.render("../Views/Admin-Page/admin_log.gjs")
}

exports.adminLoginPage = (req, res) => {
  res.render("../Views/Admin-Pages/admin_login.ejs");
};

exports.adminDashBoard = (request, response, next) => {
  response.render("../Views/Admin-page/admin-home.ejs", {});
};

exports.adminLoginPost = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let admin = new Admin(email, password);
  admin
    .checkAdmin()
    .then((results) => {
      console.log(results);
      if (results.length > 0) {
        req.session.current_user = email;
        res.render("../Views/Admin-Pages/admin-home.ejs");
      } else console.log("Login Failed...");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.viewCategory = (req, res) => {
  res.render("../Views/Admin-Pages/view-category.ejs");
};

exports.addProduct = (req, res) => {
  res.render("../Views/Admin-Pages/add-product.ejs");
};

exports.viewProductList = (req, res) => {
  res.render("../Views/Admin-Pages/product-list.ejs");
};

exports.editProduct = (req, res) => {
  res.render("../Views/Admin-Pages/edit-product.ejs");
};
exports.signout = (request, response, next) => {
  request.session.current_user = null;
  request.session.destroy();
  response.redirect("/admin");
};
