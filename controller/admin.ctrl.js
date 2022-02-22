

exports.adminHomePage=(req,res)=>{
    res.render("./Admin-Pages/admin-home.ejs");
}

exports.adminLoginPage=(req,res)=>{
    res.render("./Admin-Pages/admin_login.ejs");
}

exports.viewCategory=(req,res)=>{
    res.render("./Admin-Pages/view-category.ejs");
}