import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const DB_OPTIONS = {
            dbName: process.env.DATABASE_NAME,
            user: process.env.DB_USERNAME,
            pass: process.env.DB_PASSWORD,
            // authSource: process.env.DB_AUTH_SOURCE,
        };
        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed");
        console.log(error?.message);
    }
};

export default connectDB;
