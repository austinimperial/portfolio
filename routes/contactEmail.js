const express = require('express')
const nodemailer = require('nodemailer');
const router = express.Router()
const Joi = require('joi')
require('dotenv').config()

const JoiEmailSchema = Joi.object({
    name: Joi.string().min(1).max(1000).required(),
    email: Joi.string().min(1).max(1000).email().required(),
    subject: Joi.string().min(1).max(1000).required(),
    message: Joi.string().min(1).max(100000).required()
})

router.get('/', async (req,res) => {

    const {error} = Joi.validate(req.body,JoiEmailSchema)
    if (error) return res.sendStatus(400)

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
        subject: subject,
        text: `
            name: ${name} 
            email: ${email} 
            message: ${message}
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