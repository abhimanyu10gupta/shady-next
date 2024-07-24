
import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  try{
    // console.log("here" + process.env.DB_URI)
    const prom = mongoose.connect(process.env.DB_URI!);
    // console.log(prom)

  } catch(error:any) {
    console.log(error)
  }
};

export default dbConnect;