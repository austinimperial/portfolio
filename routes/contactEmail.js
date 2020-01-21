const express = require('express')
const nodemailer = require('nodemailer');
const router = express.Router()
const Joi = require('joi')
require('dotenv').config()
const joiEmailSchema = require('../models/joiEmailSchema')

router.post('/', async (req,res) => {
    console.log('got it')

    const {error} = Joi.validate(req.body,joiEmailSchema)
    if (error) return res.sendStatu(400)

    const {name,email,subject,message} = req.body
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: `${process.env.contact_email_user}`,
            pass: `${process.env.contact_email_pass}`
        }
    });

    const mailOptions = {
        from: `${process.env.contact_email_user}`,
        to: `${process.env.contact_email_destination}`,
        subject: subject.text,
        text: `
            name: ${name.text} 
            email: ${email.text} 
            message: ${message.text}
        `
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send(error)
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.sendStatus(200)
})

module.exports = router