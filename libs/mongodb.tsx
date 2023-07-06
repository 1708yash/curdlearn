import exp from "constants";
import mongoose from "mongoose";
declare const process: {
  env: {
    MONGODB_URL: string;
  };
};
const connectMongoDb=async()=>{
     try {
       mongoose.connect(
         "mongodb+srv://21bcs5128:OiWHDsFdkXipN7Y1@cluster0.h5vq3js.mongodb.net/crudlearn"
       ),
         { bufferTimeoutMS: 30000 };
       console.log("MongoDB Connected");
     } catch (error) {
       console.error("Error connecting to MongoDB:", error);
     }
     
};
export default connectMongoDb;