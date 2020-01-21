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
    StyledTagSmashContainer
} from './styles'
import blurb from './blurb'
import resume from 'resume/resume.pdf'

function Intro() {

    // global state
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)

    if (xxs || xs || sm) {
        return (
            <StyledContainer>
                <Col style={{'flexBasis':'50%','padding':'0% 5% 0% 5%'}} center >
                    <StyledBigText>
                        Hello! I'm <StyledBigTextSpan>Austin</StyledBigTextSpan>
                    </StyledBigText>
                    <StyledBlurb>
                        {blurb}
                    </StyledBlurb>
                    <div style={{'display':'flex'}}>
                        <a href={resume} target='_blank' rel="noopener noreferrer" >
                            <StyledResumeButton>resume</StyledResumeButton>
                        </a>
                    </div>
                    <StyledTagSmashContainer>
                        <TagSmash height='50vh'/>
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
                    <div style={{'display':'flex'}}>
                        <a href={resume} target='_blank' rel="noopener noreferrer" >
                            <StyledResumeButton>resume</StyledResumeButton>
                        </a>
                    </div>
                </Col>
                <Col style={{'flexBasis':'50%','padding':'0% 5% 0% 5%'}} center >
                    <TagSmash />
                </Col>
            </StyledContainer>
        )        
    }

}

export default Intro