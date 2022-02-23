const pool = require('../Database/dbconfig');
module.exports = class Category {
    constructor(name, imagename) {
        this.name = name;
        this.imagename = imagename;
    }
    static fetchAllCategory(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
             if(!err){
               let sql = "select * from category";
               con.query(sql,(err,queryResults)=>{
                  con.release();
                  err ? reject(err) : resolve(queryResults);
               });
             }
             else 
               reject(err);
           }); 
        });
    }
    save() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
              if(!err){  
               let sql = "insert into category(name,imagename) values(?,?)";
               con.query(sql,[this.name,this.imagename],(err,queryResult)=>{
                 con.release(); 
                 err ? reject(err) : resolve(queryResult);
               });
              }
              else 
                reject(err);
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
    update() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
    categoryById(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
    categoryList() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {

            });
        });
    }
}