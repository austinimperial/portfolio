const Joi = require('joi')

const JoiEmailSchema = Joi.object({

    name: Joi.object({
        text: Joi.string().min(1).max(1000).required(), 
        invalid: Joi.bool().required()     
    })    
    .error(() => {
        return {message: 'name'}
    }),

    email: Joi.object({
        text: Joi.string().email().min(1).max(1000).required(), 
        invalid: Joi.bool().required()      
    })
    .error(() => {
        return {message: 'email'}
    }),

    subject: Joi.object({
        text: Joi.string().min(1).max(1000).required(), 
        invalid: Joi.bool().required()      
    })
    .error(() => {
        return {message: 'subject'}
    }),

    message: Joi.object({
        text: Joi.string().min(1).max(100000).required(), 
        invalid: Joi.bool().required()     
    })
    .error(() => {
        return {message: 'message'}
    })
})

export default JoiEmailSchema