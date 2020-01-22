import React, { useContext } from 'react'
import { StyledContainer, StyledNavButtonContainer, StyledLogoContainer } from './styles'
import { StyledNavButton } from 'components/shared/sharedStyles'
import { SectionRefsForScrollContext } from 'globalState/sectionRefsForScroll'
import GitHubLogo from 'components/shared/githubLogo/githubLogo.js'
import LinkedInLogo from 'components/footer/linkedInLogo/LinkedInLogo'

function Footer() {

    // global state
    const {scrollToSection} = useContext(SectionRefsForScrollContext)

    return (
        <StyledContainer>

            <StyledLogoContainer>
                <GitHubLogo className='footer' href="https://github.com/austinimperial?tab=repositories" />
                <LinkedInLogo className='footer' href="https://www.linkedin.com/in/austinimperial/" />
            </StyledLogoContainer>

            <StyledNavButtonContainer>
                <StyledNavButton
                    onClick={() => window.scroll({top:0,behavior:'smooth'})}
                >
                    top
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
            </StyledNavButtonContainer>

        </StyledContainer>
    )
}

export default Footer