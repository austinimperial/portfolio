import React, { useContext } from 'react'
import { Col } from 'components/layout/index'
import TextInput from 'components/contact/textInput/index'
import {
    StyledContainer,
    StyledEmailForm,
    StyledTextArea,
    StyledTextAreaLabel,
    StyledSendButton,
    StyledSendButtonContainer
} from './styles'
import fetchContactEmail from 'services/fetchContactEmail'
import { StyledHeader } from 'components/shared/sharedStyles'
import { ScreenSizesContext } from 'globalState/screenSizes/index'
import { ContactFormContext } from 'globalState/contactForm/index'
import JoiEmailSchema from 'models/JoiEmailSchema'
const Joi = require('joi')

function Contact() {

    // global state
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)
    const {email,changeValidationStatus,updateField} = useContext(ContactFormContext)

    const handleSubmit = async e => {
        e.preventDefault()

        const {error} = Joi.validate(email,JoiEmailSchema, {'abortEarly':false})
        if (error) return changeValidationStatus(error.details.map(error => error.message))

        const res = await fetchContactEmail(email)
        console.log(res.status)
    }

    return (
        <StyledContainer>
            <Col center style={{'alignItems':'center'}} >
                <StyledHeader>Contact</StyledHeader>
                <StyledEmailForm
                    onSubmit={handleSubmit}
                    small={xxs || xs || sm}
                    big={md || lg || xl}
                >
                    <TextInput 
                        value={email.name.text}
                        onChange={e => updateField('name',{text:e.target.value,invalid:false})}
                        invalid={email.name.invalid}
                        label="name" 
                    />
                    <TextInput 
                        value={email.email.text}
                        onChange={e => updateField('email',{text:e.target.value,invalid:false})}
                        invalid={email.email.invalid}
                        label="email" 
                    />
                    <TextInput 
                        value={email.subject.text}
                        onChange={e => updateField('subject',{text:e.target.value,invalid:false})}
                        invalid={email.subject.invalid}
                        label="subject" 
                    />
                    <StyledTextAreaLabel invalid={email.message.invalid} >message</StyledTextAreaLabel>
                    <StyledTextArea 
                        value={email.message.text}
                        onChange={e => updateField('message',{text:e.target.value,invalid:false})}
                        invalid={email.message.invalid}
                        small={xxs || xs || sm}
                        big={md || lg || xl}   
                    />
                    <StyledSendButtonContainer>
                        <StyledSendButton type="submit" >Send</StyledSendButton> 
                    </StyledSendButtonContainer>
                </StyledEmailForm>
            </Col>
        </StyledContainer>
    )
}

export default Contact