import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log("DB Connected Successfully!");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;