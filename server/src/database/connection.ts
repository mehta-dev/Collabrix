import mongoose from "mongoose";
import { env } from "../config/index.js";

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);

    console.log("✅ MongoDB Atlas connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB");

    if (error instanceof Error) {
      console.error(error.message);
    }

    process.exit(1);
  }
};