import { User } from "@/models/User"
import { NextResponse } from "next/server"
export const DELETE=async(req,{params})=>{
    const{userid}=params
try {
   await User.deleteOne({_id:userid})
} catch (error) {
    NextResponse.json({message:'user not deleted'})
}    
   return NextResponse.json({
        message:'user deleted succesfully'
    })
}
export const GET=async(req,{params})=>{
    const{userid}=params
    let user=[];
try {
  user=await User.findById(userid)
} catch (error) {
    NextResponse.json({message:'user not find'})
}    
   return NextResponse.json({
        user
    })
}
export const PUT=async(req,{params})=>{
    const{userid}=params
    const{name,password,about,profileUrl}=await req.json();
    let user=[];
try {
  user=await User.updateOne({_id:userid},{name,password,about,profileUrl})
} catch (error) {
    NextResponse.json({message:'user not update'})
}    
   return NextResponse.json({
       message: "user update successfully"
    })
}