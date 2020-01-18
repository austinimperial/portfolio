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

    const updateField = (field,changes) => {
        setEmail(prevEmail => {
            const newField = {...prevEmail[field], ...changes}
            return  {...prevEmail, ...{[field]:newField}}
        })
    }

    const changeValidationStatus = (fieldArray) => {
        fieldArray.forEach(field => {
            updateField(field,{invalid:true})
        })
    }

    const value = {
        email,
        changeValidationStatus,
        updateField
    }

    return (
        <ContactFormContext.Provider value={value}>
            {children}
        </ContactFormContext.Provider>
    )
}

export default ContactFormProvider