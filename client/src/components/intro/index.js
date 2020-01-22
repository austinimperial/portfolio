import React, { useContext } from 'react'
import { Col } from 'components/layout/index'
import TagSmash from 'images/tagSmash'
import { ScreenSizesContext } from 'globalState/screenSizes/index'
import {
    StyledContainer,
    StyledBigText,
    StyledBlurb,
    StyledBigTextSpan,
    StyledResumeButton,
    StyledTagSmashContainer,
    StyledButtonContainer
} from './styles'
import blurb from './blurb'
import resume from 'resume/resume.pdf'

function Intro() {

    // global state
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)

    if (xxs || xs || sm) {
        return (
            <StyledContainer>
                <Col style={{'width':'100%'}} center >
                    <StyledBigText small >
                        Hello! I'm <StyledBigTextSpan>Austin</StyledBigTextSpan>
                    </StyledBigText>
                    <StyledBlurb small >
                        {blurb}
                    </StyledBlurb>
                    <StyledButtonContainer small >
                        <a href={resume} target='_blank' rel="noopener noreferrer" >
                            <StyledResumeButton>resume</StyledResumeButton>
                        </a>
                    </StyledButtonContainer>
                    <StyledTagSmashContainer small >
                        <TagSmash width='100%' />
                    </StyledTagSmashContainer>
                </Col>
            </StyledContainer>
        )   
    }

    if (md || lg || xl) {
        return (
            <StyledContainer>
                <Col style={{'flexBasis':'50%','padding':'0% 0% 0% 5%'}} center >
                    <StyledBigText>
                        Hello! I'm <StyledBigTextSpan>Austin</StyledBigTextSpan>
                    </StyledBigText>
                    <StyledBlurb>
                        {blurb}
                    </StyledBlurb>
                    <StyledButtonContainer>
                        <a href={resume} target='_blank' rel="noopener noreferrer" >
                            <StyledResumeButton>resume</StyledResumeButton>
                        </a>
                    </StyledButtonContainer>
                </Col>
                <Col style={{'flexBasis':'50%','padding':'0% 5% 0% 5%'}} center >
                    <TagSmash />
                </Col>
            </StyledContainer>
        )        
    }

}

export default Intro