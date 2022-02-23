const pool = require('../Database/dbconfig');

module.exports = class product{
    constructor(name,price,imageURL,quantity,category_id,description){
        this.name=name;
        this.price=price;
        this.imageURL=imageURL;
        this.quantity=quantity;
        this.category_id=category_id;
        this.description=description;

    }
    save(){
        return new Promise((resolve,reject)=>{
            pool.getConnection(( err, con)=>{
                if(err)
                reject();
                else{
                    let sql="insert into product (name,price,imageURL,quantity,category_id,description) values(?,?,?,?,?,?) ";
                    con.query( sql ,[(this.name),(this.price*1),(this.imageURL),(this.quantity *1),(this.category_id*1),(this.description)],(err,result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    });
                }

            });
        });

    }

    update(){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
              let sql = "update product set name=?,price=?,quantity=?,description=?,imageURL=? where id=?";
              con.query(sql,[this.name,this.price*1,this.quantity*1,this.description,this.imageURL,this.id*1],(err,result)=>{
                err ? reject(err) : resolve(result);
                con.release();
              });
            }
            else
              reject(err);
          }); 
        });
      }

      static fetchAll(){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select * from product where isDeleted='false'";
              con.query(sql,(err,results)=>{
                err ? reject(err) : resolve(results);
                con.release();
              });            
            }
            else
              reject(err);
          });        
        });
     }


     static fetchProductById(productId){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
               let sql = "select * from product where id =?";
               con.query(sql,[productId*1],(err,result)=>{
                 err ? reject(err) : resolve(result);
                 con.release();
               });
            }
            else
              reject(err);
          });
        });
     }


     static delete(productId){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
                let sql = "update product set isDeleted='true' where id =?";
                con.query(sql,[parseInt(productId)],(err,result)=>{
                  err ? reject(err) : resolve(result);
                  con.release();
                });
            }
            else
              reject(err);
          });
        });
      }

}