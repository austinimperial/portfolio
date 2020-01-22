import React from 'react'
import { ReactSVG } from 'react-svg'
import {
    StyledSmallLabel,
    StyledLogoContainer
} from './styles'
import './smallLogoStyles.css'

function SmallLogoWrapper({skill,oneClass}) {
    return (
        <StyledLogoContainer>
            <ReactSVG
                src={skill.src}
                beforeInjection={svg => {
                    svg.classList.add(oneClass);
                }}
            />  
            <StyledSmallLabel>{skill.label}</StyledSmallLabel>
        </StyledLogoContainer>
    )
}

export default SmallLogoWrapper