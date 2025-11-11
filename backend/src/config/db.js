import mongoose from 'mongoose';

const connectDB = async () => {
    if (!process.env.MONGOURL) {
        console.error("MONGOURL is not defined in environment variables.");
        process.exit(1); // Exit with failure
    }

    try {
        const conn = await mongoose.connect(process.env.MONGOURL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;
