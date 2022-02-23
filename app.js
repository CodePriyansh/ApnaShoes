const express = require("express");
const app = express();
const adminRoute = require("./routes/admin.route");
const productRoute=require('./routes/product.route')
const bodyParser = require("body-parser");
const path = require("path");

app.set("view Engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/product",productRoute)
app.use("/admin", adminRoute);
app.listen(3333, () => {
  console.log("server Started");
});
// it is test commnet