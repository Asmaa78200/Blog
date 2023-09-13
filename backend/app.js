const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors'); 
var cookieParser = require('cookie-parser');



//database connection 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
  
//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true
}));
app.use(cookieParser());
app.use(cors());

// ROUTES MIDDLEW
//PORT
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});