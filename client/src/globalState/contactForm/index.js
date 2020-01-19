import React, { useState } from 'react'
export const ContactFormContext = React.createContext()

function ContactFormProvider({children}) {
    const initialEmail = {
        name:{text:"", invalid:false},
        subject:{text:"", invalid:false},
        email:{text:"", invalid:false},
        message:{text:"", invalid:false}
    }

    const [email,setEmail] = useState(initialEmail)
    const [isSent,setIsSent] = useState(false)

    const updateField = (field,changes) => {
        setEmail(prevEmail => {
            const newField = {...prevEmail[field], ...changes}
            return  {...prevEmail, ...{[field]:newField}}
        })
    }

    const changeValidationStatus = (fieldArray,newStatus) => {
        fieldArray.forEach(field => {
            updateField(field,{invalid:newStatus})
        })
    }

    const value = {
        email,
        changeValidationStatus,
        updateField,
        isSent,
        setIsSent
    }

    return (
        <ContactFormContext.Provider value={value}>
            {children}
        </ContactFormContext.Provider>
    )
}

export default ContactFormProvider