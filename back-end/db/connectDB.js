import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = async () => {
    try {
        dotenv.config();
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;