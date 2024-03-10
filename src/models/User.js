// import { tree } from "next/dist/build/templates/app-page";

const { Schema,mongoose } = require("mongoose");

const UserSchema=Schema({
    name:String,
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    about:String,
    profileUrl:String,
   
})
export const User=mongoose.models.users||mongoose.model("users",UserSchema);