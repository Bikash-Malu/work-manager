import { connectDb } from "@/helper/db";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
connectDb();
export const GET = async(req) => {
  let users=[];
  try {
   users=
   await User.find();
   
  } catch (error) {
    return NextResponse.json({
      message:"user not get",
      success:false
    })
  }

  return NextResponse.json(users, { status: 201 });
};
export const DELETE = (req) => {
  return NextResponse.json(
    {
      message: "Deleted successfully",
    },
    {
      status: 401,
      statusText: "deleted",
    }
  );
};
export const POST =async(req) => {
  try {
    //create user object with model
const{name,email,password,about,profileUrl}=await req.json();
console.log({name,email,password,about,profileUrl});
    const items = await new User({name,email,password,about,profileUrl}).save();
    return NextResponse.json(items, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user",
      status: false,
    },{status:401,statusText:'not create'});
  }
};
