import bcryptjs from 'bcryptjs'
import { connectDb } from "@/lib/connectDb";
import User from "@/models/userModel/userModel";
import { NextRequest, NextResponse } from "next/server";


export const POST=async(requrest:NextRequest)=>{

try {
await connectDb()
    const userinfo=await requrest.json()
const {name,email,password}=userinfo
const user=await User.findOne({email})
if(user){
    return NextResponse.json({message:'user alredy exist '})
}

const hsaspassword=await bcryptjs.hash(password,10)
const newuser=new User({name,email,password:hsaspassword})
newuser.save()
    return NextResponse.json(userinfo)
} catch (error:any) {
    return NextResponse.json({message:error.message})
}

}