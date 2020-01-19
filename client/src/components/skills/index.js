import React, { useState, useEffect, useRef, useContext } from 'react'
import {
    StyledContainer,
    StyledRegText,
    StyledSkillLabel
} from './styles'
import { StyledHeader } from 'components/shared/sharedStyles'
import { SectionRefsForScrollContext } from 'globalState/sectionRefsForScroll/index'
import {Col} from 'components/layout/index'
import SkillIcons from 'components/skills/skillIcons/index'

function Skills() {

    // global state, ref, and effect for handling programmatic scroll
    const {updateRefs} = useContext(SectionRefsForScrollContext)
    const skills = useRef()
    useEffect(() => updateRefs({skills}),[])

    // local state 
    const [currentSkill,setCurrentSkill] = useState("")

    return (
        <StyledContainer ref={skills} >
            <Col center >
                <StyledHeader>What do I use?</StyledHeader>
                <StyledRegText>I have experience with the following tools and technologies:</StyledRegText>
                <SkillIcons setCurrentSkill={setCurrentSkill}/>
                <StyledSkillLabel>{currentSkill}</StyledSkillLabel>
            </Col>
        </StyledContainer>
    )
}

export default Skills