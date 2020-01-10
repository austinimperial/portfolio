import React from 'react'
import {
    StyledContainer,
    StyledColumn,
    StyledRow,
    StyledNameIntro,
    StyledBlurb
} from './styles'
import blurb from './blurb'

function Intro() {
    return (
        <StyledContainer>
            <StyledColumn left >
                <StyledRow>
                    <StyledColumn>
                        <StyledNameIntro>
                            Hello! I'm Austin
                        </StyledNameIntro>
                        <StyledBlurb>
                            {blurb}
                        </StyledBlurb>                        
                    </StyledColumn>
                </StyledRow>
            </StyledColumn>
            <StyledColumn right >
                <StyledRow>
                    <p>row1</p>
                </StyledRow>
            </StyledColumn>
        </StyledContainer>
    )
}

export default Intro