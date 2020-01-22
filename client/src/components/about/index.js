import React, { useContext } from 'react'
import {
    StyledContainer,
    StyledHeadshot,
    StyledBlurbText,
    StyledPicAndBlurbContainer
} from './styles'
import {Col} from 'components/layout/index'
import { StyledHeader } from 'components/shared/sharedStyles'
import { ScreenSizesContext } from 'globalState/screenSizes/index'
import headshot from 'images/headshot.jpg'
import aboutBlurb from './aboutBlurb'

function About() {

    // global state
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)

    if (xxs || xs || sm) {
        return (
            <StyledContainer>
                <Col center style={{'alignItems':'center'}} >
                    <StyledHeader>Some More About Me</StyledHeader>
                    <StyledHeadshot src={headshot} />
                    <StyledBlurbText>
                        {aboutBlurb}
                    </StyledBlurbText>    
                </Col>
            </StyledContainer>
        )             
    }

    if (md || lg || xl) {
        return (
            <StyledContainer>
                <Col center style={{'alignItems':'center'}} >
                    <StyledHeader>Some More About Me</StyledHeader>
                        <StyledPicAndBlurbContainer>
                            <StyledHeadshot src={headshot} />
                            <StyledBlurbText>
                                {aboutBlurb}
                            </StyledBlurbText>                             
                        </StyledPicAndBlurbContainer>
                </Col>
            </StyledContainer>
        )        
    }

}

export default About