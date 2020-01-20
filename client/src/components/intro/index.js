import React from 'react'
import { Col } from 'components/layout/index'
import { ReactSVG } from 'react-svg'
import tagSmash from 'images/tagSmash.svg'
import {
    StyledContainer,
    StyledBigText,
    StyledBlurb,
    StyledBigTextSpan,
    StyledResumeButton
} from './styles'
import blurb from './blurb'
import resume from 'resume/resume.pdf'

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
                    <a href={resume} target='_blank'>
                        <StyledResumeButton>resume</StyledResumeButton>
                    </a>
                </div>
            </Col>
            <Col style={{'flexBasis':'40%'}} center >
                <ReactSVG src={tagSmash} />
            </Col>
        </StyledContainer>
    )
}

export default Intro