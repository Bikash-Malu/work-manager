import { getResponse } from "@/helper/responseHandle";
import { NextResponse } from "next/server";

const { Task } = require("@/models/Task");
export const POST=async(req)=>{
    try {
    const{title,content,userid}=await req.json();
    console.log({title,content,userid});
    const items = await new Task({title,content,userid}).save();
    return NextResponse.json(items, { status: 201 });
  } catch (error) {
    console.log(error);
     return getResponse("task not create",401,false)
  }
}
export const GET = async(req) => {
    let tasks=[];
    try {
     tasks=await Task.find();
     
    } catch (error) {
      return getResponse("task not found",401,false)
    }
    return NextResponse.json(tasks, { status: 200 });
  };