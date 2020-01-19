import React, { useContext } from 'react'
import { StyledContainer } from './styles'
import { StyledNavButton } from 'components/shared/sharedStyles'
import { SectionRefsForScrollContext } from 'globalState/sectionRefsForScroll/index'

function Header() {

    // global state
    const {scrollToSection} = useContext(SectionRefsForScrollContext)

    return (
        <StyledContainer>
            <StyledNavButton
                onClick={() => scrollToSection('projects')}
            >
                projects
            </StyledNavButton>

            <StyledNavButton
                onClick={() => scrollToSection('contact')}
            >
                contact
            </StyledNavButton>
        </StyledContainer>
    )
}

export default Header