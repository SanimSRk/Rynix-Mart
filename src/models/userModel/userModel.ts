import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
name:{
    type:String,
    require:[true,'name is require'],
    unique:true
},
email:{
    type:String,
    require:[true,"email is require "],
    unique:true
},
password:{
    type:String,
require:true
}
,
date:{
    type :Date,
    default:Date.now
}

},{

    collection:'users'
})


const User= mongoose.models.users || mongoose.model('users',userSchema)
export default User