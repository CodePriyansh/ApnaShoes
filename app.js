const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const adminRoute = require("./routes/admin.route");
const categoryRoute = require("./routes/category.router");
const userRouter = require("./routes/user.route");
const app = express();

app.set("view Engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "abcdef",
  })
);
//jaya
app.use("/", userRouter);
app.use("/admin", adminRoute);
app.use("/category", categoryRoute);

app.listen(3333, () => {
  console.log("server Started");
});
