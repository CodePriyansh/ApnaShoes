const { request, response } = require("express");
const { required } = require("nodemon/lib/config");
const Product =require('../model/product');
const Category=require('../model/category')
exports.addProductPage = (request, response, next) => {
    Category.fetchAllCategory()
        .then(results => {
            console.log(results);
            return response.render("../Views/Admin-Pages/add_product.ejs", {
                categories: results
            });

        })
        .catch(err => {
            console.log(err);
            return response.send("Erro.....");
        });
};
exports.addProductPost = (request,response)=>{
    let product = new Product();
product.name = request.body.name;
product.price = request.body.price;
product.description = request.body.description;
product.imageURL = request.body.imageURL;
product.quantity =request.body.quantity;
product.category_id=request.body.category_id;
product.save().then(result=>{
    response.send("product saved");

}).catch(err=>{
    response.send("error ")
});
}

exports.productList=(request,response)=>{
    Product.fetchAll()
    .then(results=>{
       response.render("../Views/Admin-Pages/product-list.ejs",{
         productList: results
       });
    })
    .catch(err=>{
        console.log(err);
    });
}


exports.editProduct=(request,response)=>{
    Product.fetchProductById(request.params.productId)
    .then(result=>{
      if(result.length>0){
         response.render("../Views/Admin-Pages/edit_product.ejs",{
            product: result[0]
         });
      }
    })
    .catch(err=>{
       console.log(err);
    });
}

exports.updateProduct =  (request,response)=>{
    let p = new Product();
    p.id = request.body.id;
    console.log(p.id);
    p.name = request.body.name;
    p.price = request.body.price;
    p.quantity=request.body.quantity;
    p.imageURL = request.body.imageURL;
    p.description = request.body.description;
    p.update().then(result=>{
       response.redirect("/product/product-list");
    }).catch(err=>{
       console.log(err);
       response.send("Error.....");
    });
 };

 exports.deleteProduct = (request,response,next)=>{
    const id = request.params.id;
    Product.delete(id).then(result=>{
        console.log("rendaring product list");
            response.redirect("/product/product-list");
        }
    ).catch(err);
 };

