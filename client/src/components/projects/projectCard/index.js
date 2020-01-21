import React, { useState } from 'react'
import { 
    StyledContainer,
    StyledLabelText,
    StyledImg,
    StyledBlurbText,
    StyledRevealWindow,
    StyledTitleContainer,
    StyledTechnologiesUsedText,
    StyledBlurbSpan
} from './styles'
import GitHubLogo from 'components/shared/githubLogo/githubLogo'

function ProjectCard({label,blurb,img,imgLink,githubLink,techUsed}) {

    // local state
    const [isHovering,setIsHovering] = useState(false)

    return (
        <StyledContainer
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <a href={imgLink} target="_blank" rel="noopener noreferrer" >
                <StyledImg 
                    src={img} 
                    isHovering={isHovering}
                />
            </a>

            <StyledTitleContainer isHovering={isHovering} >
                <StyledLabelText isHovering={isHovering} >
                    {label}
                </StyledLabelText>       
                <StyledRevealWindow isHovering={isHovering} >
                    <GitHubLogo className='projectCard' href={githubLink} />    
                </StyledRevealWindow>         
            </StyledTitleContainer>

            <StyledBlurbText>
                {blurb}
            </StyledBlurbText>

            <StyledTechnologiesUsedText>
                Ingredients: <StyledBlurbSpan>{techUsed}</StyledBlurbSpan>
            </StyledTechnologiesUsedText>

        </StyledContainer>
    )
}

export default ProjectCard