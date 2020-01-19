import React, { useContext } from 'react'
import { StyledContainer } from './styles'
import { StyledNavButton } from 'components/shared/sharedStyles'
import { SectionRefsForScrollContext } from 'globalState/sectionRefsForScroll'

function Footer() {

    // global state
    const {scrollToSection} = useContext(SectionRefsForScrollContext)

    return (
        <StyledContainer>
            <StyledNavButton
                onClick={() => window.scroll({top:0,behavior:'smooth'})}
            >
                back to top
            </StyledNavButton>

            <StyledNavButton
                onClick={() => scrollToSection('projects')}
            >
                projects
            </StyledNavButton>

            <StyledNavButton
                onClick={() => scrollToSection('skills')}
            >
                skills
            </StyledNavButton>
        </StyledContainer>
    )
}

export default Footer