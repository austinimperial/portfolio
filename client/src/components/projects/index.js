import React, { useContext, useRef, useEffect } from 'react'
import {Col} from 'components/layout/index'
import {
    StyledContainer,
    StyledProjectCardContainer
} from './styles'
import { StyledHeader } from 'components/shared/sharedStyles'
import { SectionRefsForScrollContext } from 'globalState/sectionRefsForScroll/index'
import ProjectCard from 'components/projects/projectCard/index'
import mealTrackerScreenShot from 'images/mealTrackerScreenshot.png'
import { mealTrackerBlurb } from 'components/projects/blurbs'

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

                    <ProjectCard 
                        label="Meal Tracker" 
                        img={mealTrackerScreenShot}
                        blurb={mealTrackerBlurb}
                        imgLink='http://meal-tracker-test-2121.herokuapp.com/'
                        githubLink='https://github.com/austinimperial/meal_tracker'
                        techUsed={['React, styled-components, Node, Express, react-router, mongoDB, JWT']}
                    />
                    
                </StyledProjectCardContainer>
            </Col>
        </StyledContainer>
    )
}

export default Projects