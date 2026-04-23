import mongoose from "mongoose";

const sesstionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"User is required"]
    },
    refreshTokenHash:{
        type:String,
        required:[true,"Refresh token hash is required"]
    },
    ip:{
        type:String,
        required:[true,"Ip address is required"]
    },
    userAgent:{
        type:String,
        required:[true,"User Agent is required"]
    },
    revoked:{
        type:Boolean,
        default:false
    },
    revokedAt:{
        type:Date,
        default:null,
        index: { expireAfterSeconds: 30 * 24 * 60 * 60 }
    }
},{
    timestamps:true
})

const SessionModel = mongoose.model("session",sesstionSchema)

export default SessionModel;