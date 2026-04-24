import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required!"]
    },
    email:{
        type:String,
        required:[true,"username is required!"]
    },
     password:{
        type:String,
        required:[true,"username is required!"]
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model("user",UserSchema);

export default User;