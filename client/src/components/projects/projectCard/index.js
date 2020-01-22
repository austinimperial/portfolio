import React, { useState, useContext } from 'react'
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
import { ScreenSizesContext } from 'globalState/screenSizes/index'
import GitHubLogo from 'components/shared/githubLogo/githubLogo'

function ProjectCard({label,blurb,img,imgLink,githubLink,techUsed}) {

    //global state
    const {xxs,xs,sm,md,lg,xl} = useContext(ScreenSizesContext)

    // local state
    const [isHovering,setIsHovering] = useState(false)

    if (xxs || xs) {
        return (
            <StyledContainer>
                <a href={imgLink} target="_blank" rel="noopener noreferrer" >
                    <StyledImg small src={img} />
                </a>
                <StyledTitleContainer >
                    <StyledLabelText small >
                        {label}
                    </StyledLabelText>       
                    <GitHubLogo className='projectCard' href={githubLink} />      
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

    if (sm || md || lg || xl) {
        return (
            <StyledContainer
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <a href={imgLink} target="_blank" rel="noopener noreferrer" >
                    <StyledImg big src={img} isHovering={isHovering} />
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

}

export default ProjectCard