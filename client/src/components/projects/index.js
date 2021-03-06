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
import quickBlobScreenShot from 'images/quickBlobScreenShot.png'
import bugHungScreenshot from 'images/bugHuntScreenshot.png'
import { mealTrackerBlurb, quickBlobBlurb, bugHuntBlurb } from 'components/projects/blurbs'

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
                        label="quick-blob-svg" 
                        img={quickBlobScreenShot}
                        blurb={quickBlobBlurb}
                        imgLink='https://quick-blob-svg.herokuapp.com/'
                        githubLink='https://github.com/austinimperial/quick-blob-svg'
                        techUsed={['React, styled-components, svg']}
                    />

                    <ProjectCard 
                        label="Bug Hunt Camoflage" 
                        img={bugHungScreenshot}
                        blurb={bugHuntBlurb}
                        imgLink='https://bug-hunt-camoflage.herokuapp.com/'
                        githubLink='https://github.com/austinimperial/bug-hunt-camoflage'
                        techUsed={['React, styled-components, svg']}
                    />

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