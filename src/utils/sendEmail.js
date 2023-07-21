import nodemailer from "nodemailer"

const sendEmail =async({to,url,text})=>{
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            user:process.env.EMAIL_PASSWORD

        }
    })
    const mailOptions={
        from : process.env.EMAIL_USER,
        to,
        subject: "Raja@INDIA| NextAuth",
        html:
    }
}