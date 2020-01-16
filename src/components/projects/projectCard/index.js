import React from 'react'
import { 
    StyledContainer,
    StyledLabelText
} from './styles'

function ProjectCard({label}) {
    return (
        <StyledContainer>
            <StyledLabelText>
                {label}
            </StyledLabelText>
        </StyledContainer>
    )
}

export default ProjectCard