import "dotenv/config"
import nodemailer from "nodemailer"

const transpoter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:process.env.GOOGLE_USER,
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        refreshToken:process.env.GOOGLE_REFRESH_TOKEN
    }
})

transpoter.verify((error,success) => {
    if(error){
        console.log("Error connecting to email server",error);
    }else{
        console.log("Email server is ready to send messages")
    }
})

export const sendEmail = async(to,subject,text,html) => {
    try {
        const info = await transpoter.sendMail({
            from:`Your name <${process.env.GOOGLE_USER}>`,
            to,subject,
            text,
            html
        });

        console.log("Message sent: %s",info.messageId);
        console.log("Preview URL: %s",nodemailer.getTestMessageUrl(info))
    } catch (error) {
        console.log("Error sending email",error)
    }
}