import React, { useContext } from 'react'
import { ScreenSizesContext } from 'globalState/screenSizes/index'
import { TouchScreenDetectionContext } from 'globalState/touchScreenDetection/index'
import {
    StyledContainer,
} from './styles'
import SmallLogoWrapper from './smallLogoWrapper/index'
import BigLogoWraper from './bigLogoWrapper/index'

const skills = [
    {label:"Styled Components", src: require('./images/styledComponents.svg')},
    {label:"React", src: require('./images/react.svg')},
    {label:"MongoDB", src: require('./images/mongodb.svg')},
    {label:"Node", src: require('./images/node.svg')},
    {label:"React Router", src: require('./images/reactrouter.svg')},
    {label:"Git", src: require('./images/git.svg')},
    {label:"JSON Web Token", src: require('./images/jwt.svg')}
]

// two images, 'styled components', and 'jwt' have different aspect ratio than the rest of them,
// and so are treated separately.

function SkillIcons({setCurrentSkill}) {

    // global state
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)
    const { isTouchScreen } = useContext(TouchScreenDetectionContext)

    // on small screens, there is no hover/click feature, and the label is static
    if (xxs || isTouchScreen) {
        return (
            <StyledContainer>
                <SmallLogoWrapper skill={skills[0]} oneClass="styledComponentsSmall" />            
                {
                    skills.slice(1,skills.length-1).map(skill => {
                        return (
                            <SmallLogoWrapper 
                                skill={skill} 
                                key={skill.src}
                                oneClass="regularSmall"
                                />
                        )
                    })
                }
                <SmallLogoWrapper skill={skills[skills.length-1]} oneClass="jwtSmall"/>
            </StyledContainer>
        )
    }

    // on big screens, there's a hover effect, and the label (not shown in this component) is dynamic
    if (xs || sm || md || lg || xl) {
        return (
            <StyledContainer>
                <BigLogoWraper 
                    skill={skills[0]} 
                    setCurrentSkill={setCurrentSkill} 
                    oneClass='styledComponents'
                />
                {
                    skills.slice(1,skills.length-1).map(skill => {
                        return (
                            <BigLogoWraper 
                                key={skill.src}
                                setCurrentSkill={setCurrentSkill}
                                oneClass='regular'
                                skill={skill}
                            />
                        )
                    })
                }
                <BigLogoWraper 
                    skill={skills[skills.length-1]}
                    setCurrentSkill={setCurrentSkill}
                    oneClass='jwt'
                />
            </StyledContainer>
        )        
    }

}

export default React.memo(SkillIcons)

