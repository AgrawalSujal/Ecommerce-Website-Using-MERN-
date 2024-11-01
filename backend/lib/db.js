import mongoose from "mongoose";

export const DBConnection = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MONGODB connected :${conn.connection.host}`);

    console.log("Connected to Database Successfully!!");
  } catch (error) {
    console.log("Error connecting to MONGODB", error.message);
  }
};
