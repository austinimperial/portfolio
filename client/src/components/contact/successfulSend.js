import React from 'react'
import { Col } from 'components/layout/index'
import {
    StyledContainer,
    StyledText
} from './styles'

function SuccessfulSend() {
    return (
        <StyledContainer>
            <Col center style={{'alignItems':'center'}} >
                <StyledText>Your message has been sent!</StyledText>
                <StyledText>Thanks for getting in touch,</StyledText>
                <StyledText>I will get back to you as soon as I'm able.</StyledText>
            </Col>
        </StyledContainer>
    )
}

export default SuccessfulSend