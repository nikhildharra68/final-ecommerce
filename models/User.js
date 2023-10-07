
const mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')

// setup login 
const userSchema=new mongoose.Schema({

    // username:String,-->this is automatically added by passport-local mongoose
    // password:String,-->this is automatically added by passport-local mongoose
    email:String,

    cart:[

        {
            name:String,
            price:Number,
            img:String,
            id:mongoose.Schema.Types.ObjectId,
            count:{
                type:Number,
                default:1,
                min:[0,"Quanyity cannot be less than 1"]

            }

        }
    ]

})

userSchema.plugin(passportLocalMongoose)

const User=mongoose.model("User",userSchema)

module.exports=User;