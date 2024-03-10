import { user } from "@/models/User";
import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "workmanager",
    });
    console.log("connected");
    console.log(connection.host);
  } catch (error) {
    console.log(error);
  }
};
