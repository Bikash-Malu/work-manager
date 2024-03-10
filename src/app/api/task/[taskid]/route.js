import { getResponse } from "@/helper/responseHandle";
import { Task } from "@/models/Task";
import { NextResponse } from "next/server";
export const GET=async(req,{params})=>{
    const{taskid}=params
    let task=[];
try {
  task=await Task.findById(taskid)
} catch (error) {
   return getResponse("task id not found",401,false)
}    
   return NextResponse.json({
        task
    })
}
export const PUT=async(req,{params})=>{
    const{taskid}=params
    const{title,content,status}=await req.json();
    let task=[];
try {
  task=await Task.updateOne({_id:taskid},{title,content,status})
} catch (error) {
    NextResponse.json({message:'task not update'})
}    
   return NextResponse.json({
       data:task,
       message: "task update successfully"
    })
}
export const DELETE=async(req,{params})=>{
    const{taskid}=params
try {
   await Task.deleteOne({_id:taskid})
} catch (error) {
    getResponse("ID NOT FOUND DELETE NOT POSSIBLE",401,false)
}    
   return NextResponse.json({
        message:'Task deleted succesfully'
    })
}