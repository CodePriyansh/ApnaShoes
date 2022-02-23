const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
//const {check,validationResult}=require('express-validator');

const adminRoute = require('./routes/admin.route');
const userRouter = require('./routes/user.route');

const path = require('path');
const app = express();

app.set('View Engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'dfkjfrrereprxvncvncvnrorererp'
}));

app.use('/admin', adminRoute);
app.use("/user", userRouter);

app.listen(3333, () => {
  console.log("server Started");
})