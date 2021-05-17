const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail') 

//create schema
const Schema = mongoose.Schema

const staffSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    gender:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true
    },

    occupation:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
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
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
   
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Staff=mongoose.model('Staff',staffSchema)
module.exports=Staff