const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    name:{
        type:String
    },
    date:{
        type:Date
    },
    number:{
        type:Number
    },
    location:{
        type:String
    },
    

})

const users=mongoose.model('users',userSchema)

module.exports=users