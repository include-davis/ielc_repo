/*commented code is stuff i found online 
https://strapengine.com/contact-form-with-nodemailer-gmail-and-node-js/
but idk if its useful/applies here*/

require("dotenv").config();
const express = require("express");
const cors = require('cors')
const axios = require('axios')
const nodemailer = require("nodemailer");
//const path = require("path");
const app = express();

app.use(cors({
    origin: "*"
}))
app.use(express.json())

//app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "public")));

export default async function handler(req, res){
    if (req.method !== 'POST'){
        res.render(contact.html) //front-end html page file
    } else {
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.PASSWORD,
                }
            })
            
            const mailOption = {
                from: process.env.GMAIL_USER,
                to: process.env.EMAIL,
                subject: 'You have a message!',
                html: `You have a message from 
                Name: ${firstname} ${lastname}
                Email : ${email}
                Question: ${question}`,
              }
            
            transporter.sendMail(mailOption);
            const firstname= req.body.firstname
            const lastname= req.body.lastname
            const email= req.body.email
            const question= req.body.question;
            res.send("Message successfully sent!");
        } catch (error) {
            res.send("Message could not be sent.");
        }
    }
}