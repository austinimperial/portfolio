import React from 'react'
import { ReactSVG } from 'react-svg'
import './bigLogoStyles.css'

function BigLogoWrapper({setCurrentSkill,skill,oneClass}) {
    return (
        <ReactSVG
            src={skill.src}
            beforeInjection={svg => {
                svg.classList.add(oneClass);
            }}
            onMouseEnter={() => setCurrentSkill(skill.label)}
            onMouseLeave={() => setCurrentSkill("")}
        />   
    )
}

export default BigLogoWrapper