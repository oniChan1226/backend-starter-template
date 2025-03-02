
import mongoose from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "../constants/constants.js"

dotenv.config();

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to Database", error);
        process.exit(1);
    }
};