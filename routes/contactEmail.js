const express = require('express')
const sgMail = require('@sendgrid/mail')
const router = express.Router()
const Joi = require('joi')
require('dotenv').config()
const joiEmailSchema = require('../models/joiEmailSchema')

router.post('/', async (req,res) => {

    const {error} = Joi.validate(req.body,joiEmailSchema)
    if (error) return res.sendStatus(400)

    const {name,email,subject,message} = req.body
    
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: `${process.env.CONTACT_EMAIL_DESTINATION}`,
            from: email.text,
            subject: subject.text,
            text: `${name.text} says: ${message.text}`,
            html: '<strong>sendgrid</strong>',
        };

        sgMail.send(msg);        
    } catch(err) {
        console.log(err)
    }

    res.sendStatus(200)
})

module.exports = router