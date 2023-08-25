import mongoose from "mongoose";
const URL="mongodb+srv://abdurrahman171307:EvvQLGz0Xh4a55ie@cluster0.zach0ju.mongodb.net/"
const connectMongoDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
