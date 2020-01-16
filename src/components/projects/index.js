import React from 'react'
import {Col} from 'components/layout/index'
import {
    StyledContainer,
    StyledProjectCardContainer
} from './styles'
import { StyledHeader } from 'components/shared/sharedStyles'
import ProjectCard from 'components/projects/projectCard/index'

function Projects() {
    return (
        <StyledContainer>
            <Col center >
                <StyledHeader>Projects</StyledHeader>
                <StyledProjectCardContainer>
                    <ProjectCard label="Meal Tracker" />
                </StyledProjectCardContainer>
            </Col>
        </StyledContainer>
    )
}

export default Projects