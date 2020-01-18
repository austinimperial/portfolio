const Joi = require('joi')

module.exports = joiEmailSchema = Joi.object({
    name: Joi.object({
        text: Joi.string().min(1).max(1000).required(), 
        invalid: Joi.bool().required()       
    }),

    email: Joi.object({
        text: Joi.string().email().min(1).max(1000).required(), 
        invalid: Joi.bool().required()      
    }),

    subject: Joi.object({
        text: Joi.string().min(1).max(1000).required(), 
        invalid: Joi.bool().required()     
    }),

    message: Joi.object({
        text: Joi.string().min(1).max(100000).required(), 
        invalid: Joi.bool().required()     
    }),
})