import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connection',()=>{
            console.log('MongoDB connected successfully!');
        })

        connection.on('error', (err)=>{
            console.log('MongoDb coonection error. Please make sure mongoDB is connected.' + err );
            process.exit();
        })
        
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
    }
}