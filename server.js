const express = require('express')
const cors = require('cors')
const path = require ('path')
const mongoose = require('mongoose')
const app = express()
const clothesroutes = require('./routes/clotheRoutes')
require("dotenv").config()

app.use(cors());

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true},{useUnifiedTopology:true})
 .then(() => {console.log("connected to mongo db")})
 .catch(err => console.log(err))

 app.use('/api/clothes/', clothesroutes);


if(process.env.NODE_ENV === 'production'){
 app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
 });
}


app.listen(process.env.PORT || 3001)