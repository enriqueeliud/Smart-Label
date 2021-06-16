const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClotheSchema = new Schema({
  name:{type: String, require},
  varients: [],
  prices:[],
  category: { type:String, require},
  image: { type:String, require},
  description:{ type:String, require}
}, { 
  timestaps:true
})

const Clothes = mongoose.model("Clothes", ClotheSchema,"clothes")
module.exports = Clothes

