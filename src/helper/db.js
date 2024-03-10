import { user } from "@/models/User";
import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "workmanager",
    });
    console.log("connected");
    console.log(connection.host);
    //   const User=new user({
    //         name:"BIKASH MALU",
    //         email:"bikashmalu1@gmail.com",
    //         password:"12345",
    //         about:"yh good.."
    //     });
    //     await User.save();
    //     console.log('create')
  } catch (error) {
    console.log(error);
  }
};
