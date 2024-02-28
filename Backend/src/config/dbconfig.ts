import mongoose from "mongoose";

const connectToDatabase = async()=> {
  try {
    await mongoose.connect("mongodb+srv://ishvinder133:ishu9528@inventory.o5jozdi.mongodb.net/");
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB database:", error);
  }
}

export default connectToDatabase;