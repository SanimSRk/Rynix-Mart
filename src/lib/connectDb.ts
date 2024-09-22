import mongoose from "mongoose";

export const connectDb=async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URL!)

        const connection=mongoose.connection
        connection.on('connection',()=>{

            console.log('mongodb connection success fully')
        })
        
    connection.on('error',()=>{
        console.log('mongodb connection filed')
    })
    } catch (error:any) {
        console.log("connectin error problem",error)
    }
}