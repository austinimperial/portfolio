import React, { useContext, useRef, useEffect } from 'react'
import {Col} from 'components/layout/index'
import {
    StyledContainer,
    StyledProjectCardContainer
} from './styles'
import { StyledHeader } from 'components/shared/sharedStyles'
import { SectionRefsForScrollContext } from 'globalState/sectionRefsForScroll/index'
import ProjectCard from 'components/projects/projectCard/index'

function Projects() {

    // global state, ref, & effect for handling programatic scroll
    const {updateRefs} = useContext(SectionRefsForScrollContext)
    const projects = useRef()
    useEffect(() => updateRefs({projects}),[])

    return (
        <StyledContainer ref={projects} >
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