const mongoose = require('mongoose')

//create schema
const Schema = mongoose.Schema

const roomSchema=new Schema({
    room:{
        type:String,
        required:true,
        unique:true
    },
  //   building: {
  //     type: String,
  //     required: true,
  //   },
  //   gender:{
  //     type:String,
  //     required:true,
  // },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Room=mongoose.model('Room',roomSchema)
module.exports=Room