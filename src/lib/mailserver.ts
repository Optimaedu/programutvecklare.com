import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.programutvecklare.com",
  port: 465,
  secure: true,
  
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
}
})

export async function sendMail(text:string, heading:string, email:string) {
  let message = {
        from: "info@programutvecklare.com",
        to: 'programutvecklare@gmail.com',
        text: `${text} \n Sent by: ${email}`,
        subject: heading,
      };
  try {
        const info = await transporter.sendMail(message)
        console.log(info) 
        } catch (error) {
            console.log(error)
        }
};