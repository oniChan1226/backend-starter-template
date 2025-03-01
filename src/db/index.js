
import mongoose from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "../constants.js"

dotenv.config();

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(``);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to Database", error);
        process.exit(1);
    }
};