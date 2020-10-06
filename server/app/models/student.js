const mongoose=require('mongoose')
const isEmail = require('validator/lib/isEmail') 

//create schema
const Schema=mongoose.Schema

const studentSchema=new Schema({
    
    name:{
        type:String,
        required:true,
        minlength:5
    },
    fathers_name:{
        type:String,
        required:true,
        minlength:5
    },
    fathers_mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    dob:{
        type:Date,
        required:true
    },

    email:{
      type: String,
      required: [true, 'email is required'], 
      unique: true, 
      validate: { 
          validator: function(value){
              return isEmail(value)
          }, 
          message: function(){
              return 'invalid email format'
          }
      }
    },
    address:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },
    gender:{
        type:String,
        required:true,
    },
    // batch: {
    //   type: Number,
    //   required: true,
    
  
    // },
    // building: {
    //   type: String,
    //   required: true,
    // },
    // isAvailable: {
    //   type: Boolean,
    //   default: true,
    // },
  
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Student=mongoose.model('Student',studentSchema)
module.exports=Student