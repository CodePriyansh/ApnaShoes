const { request, response } = require('express');
const User = require('../model/user');
exports.userHomePage=(request,response,next)=>{
    response.render('../Views/user-pages/user_home.ejs',{
        title:"Homepage"
    });
};
exports.userLoginPage = (request,response,next)=>{
    response.render("../Views/user-pages/user_login.ejs",{
        title: "UserLogin"
    });
};
exports.userLoginPost = (request,response,next)=>{
   const email = request.body.email;
   const password = request.body.password;
   let user = new User(email,password);
   user.checkUser().then(results=>{
     if(results.length>0){
      request.session.current_user = email; 
      response.redirect("../Views/user-pages/user_home.ejs"); 
      console.log("login success...");
     }
     else
       console.log("Login Failed...");  
   }).catch(err=>{
       console.log(err);
   });
};

exports.userRegisterPage=(request,response,next)=>{
    const name =response.body.username;
    const email=response.body.email;
    const number=response.body.number;
    const password = response.body.password;
    User.registerSave().then(result=>{
        if(result.length>0){
            response.redirect("../Views/user-pages/user_registration.ejs");
        }
        else
        console.log("registration failed...");
    }).catch(err=>{
        console.log(err);
    });
};