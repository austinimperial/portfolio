import React from 'react'
import {
    StyledContainer,
    StyledNavButton
} from './styles'

function Header() {
    return (
        <StyledContainer>
            <StyledNavButton>projects</StyledNavButton>
            <StyledNavButton>contact</StyledNavButton>
        </StyledContainer>
    )
}

export default Header