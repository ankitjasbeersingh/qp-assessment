import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ankitjasbeersingh:PdnmQRdilnxLyK2u@cluster0.oyapd0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected');
    } catch (error){
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}


