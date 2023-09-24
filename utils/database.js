import mongoose from "mongoose";

let isConnected = false;


export const  connectToDB = async () => {
    mongoose.set('strictQuery', true)
    
    if(isConnected){
        console.log("Connection Already Stablish");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_INSTANCE,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log("Connection Successful");
    } catch (error) {
        console.log("Connection Error: ", error);
    }
};