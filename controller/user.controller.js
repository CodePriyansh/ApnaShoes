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
    response.render("../Views/user-pages/user_registration.ejs",{
        tittle:"UserRegister"
    });
};



exports.userRegisterPost=(request,response,next)=>{
    const name =response.body.name;
    const email=response.body.email;
    const number=response.body.number;
    const password = response.body.password;
    let user = new User(name,email,number,password);
    User.registerSave()
    .then(result=>{
       response.send("registration success..");
    }).catch(err=>{
        console.log(err);
        response.send("registration failed..");
    });
};