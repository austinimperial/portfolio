import React from 'react'
import { Col } from 'components/layout/index'
import AustinLogo from 'components/intro/AustinLogo'
import {
    StyledContainer,
    StyledBigText,
    StyledBlurb,
    StyledBigTextSpan,
    StyledResumeButton
} from './styles'
import blurb from './blurb'

function Intro() {
    return (
        <StyledContainer>
            <Col style={{'flexBasis':'60%','padding':'0% 5% 0% 10%'}} center >
                <StyledBigText>
                    Hello! I'm <StyledBigTextSpan>Austin</StyledBigTextSpan>
                </StyledBigText>
                <StyledBlurb>
                    {blurb}
                </StyledBlurb>
                <div style={{'display':'flex'}}>
                    <StyledResumeButton>resume</StyledResumeButton>
                </div>
            </Col>
            <Col style={{'flexBasis':'40%'}} center >
                <AustinLogo height="200px" />
            </Col>
        </StyledContainer>
    )
}

export default Intro