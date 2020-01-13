import React, { useState } from 'react'
import {
    StyledContainer,
    StyledHeader,
    StyledRegText,
    StyledSkillLabel
} from './styles'
import {Col} from 'components/layout/index'
import SkillIcons from 'components/skills/skillIcons/index'

function Skills() {
    const [currentSkill,setCurrentSkill] = useState("")
    return (
        <StyledContainer>
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