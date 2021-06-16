const express = require('express')
const router = express.Router()
const Clothes = require('../models/Clothes')


router.get('/getallclothes', async(req,res)=>{
   try{
     const clothes = await Clothes.find({})
      res.send(clothes)
    }
  catch (error){
    return res.status(400).json({message:error})
  }
   
})


module.exports = router