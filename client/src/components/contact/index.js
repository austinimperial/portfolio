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
import { StyledHeader } from 'components/shared/sharedStyles'
import { ScreenSizesContext } from 'globalState/screenSizes/index'

function Contact() {
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)

    return (
        <StyledContainer>
            <Col center style={{'alignItems':'center'}} >
                <StyledHeader>Contact</StyledHeader>
                <StyledEmailForm
                    small={xxs || xs || sm}
                    big={md || lg || xl}
                >
                    <TextInput label="name" />
                    <TextInput label="email" />
                    <TextInput label="subject" />

                    <StyledTextAreaLabel>message</StyledTextAreaLabel>
                    <StyledTextArea 
                        small={xxs || xs || sm}
                        big={md || lg || xl}    
                    />
                    <StyledSendButtonContainer>
                       <StyledSendButton>Send</StyledSendButton> 
                    </StyledSendButtonContainer>
                </StyledEmailForm>
            </Col>
        </StyledContainer>
    )
}

export default Contact