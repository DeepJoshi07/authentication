import mongoose from "mongoose";
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const data = await mongoose.connect(MONGO_URI);
    if(!data){
        throw new Error("DB connection failed!")
    }else{
        console.log("DB connected successfully")
    }
  } catch (error) {
    console.log("DB connection error",error)
  }
};
export default connectDB;
