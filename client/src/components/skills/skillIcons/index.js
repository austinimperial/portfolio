import React from 'react'
import { ReactSVG } from 'react-svg'
import {
    StyledContainer
} from './styles'
import './hover.css'

const skills = [
    {label:"Styled Components", src: require('./images/styledComponents.svg')},
    {label:"React", src: require('./images/react.svg')},
    {label:"MongoDB", src: require('./images/mongodb.svg')},
    {label:"Node", src: require('./images/node.svg')},
    {label:"React Router", src: require('./images/reactrouter.svg')},
    {label:"Git", src: require('./images/git.svg')},
    {label:"JSON Web Token", src: require('./images/jwt.svg')}
]

function SkillIcons({setCurrentSkill}) {
    return (
        <StyledContainer>
                <ReactSVG
                    src={skills[0].src}
                    beforeInjection={svg => {
                        svg.classList.add('styledComponents')
                    }}
                    onMouseEnter={() => setCurrentSkill(skills[0].label)}
                    onMouseLeave={() => setCurrentSkill("")}
                />               
            {
                skills.slice(1,skills.length-1).map(skill => {
                    return (
                        <ReactSVG
                            key={skill.src}
                            src={skill.src}
                            beforeInjection={svg => {
                                svg.classList.add('regular')
                            }}
                            onMouseEnter={() => setCurrentSkill(skill.label)}
                            onMouseLeave={() => setCurrentSkill("")}
                        />
                    )
                })
            }
            <ReactSVG
                src={skills[skills.length-1].src}
                beforeInjection={svg => {
                    svg.classList.add('jwt')
                }}
                onMouseEnter={() => setCurrentSkill(skills[skills.length-1].label)}
                onMouseLeave={() => setCurrentSkill("")}
            />
        </StyledContainer>
    )
}

export default React.memo(SkillIcons)