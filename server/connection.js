import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(() =>{
    console.log("Connected to DB");
}).catch((error) => {
    console.log(error.message);
});

