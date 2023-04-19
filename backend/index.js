import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'


dotenv.config()
const app=express()
const port=process.env.PORT || 8000;

//database connection
mongoose.set('strictQuery',false);
const connect=async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })

    console.log("MongoDB database connected");
   } catch(err){
      console.log(err);
   } 
};

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute)
app.use('/Users',userRoute)
app.use('/auth',authRoute)



//listening on port
app.listen(port,()=>{
    connect();
    console.log('server listening on port',port);

})
