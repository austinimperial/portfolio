import styled from 'styled-components'

export const StyledContainer = styled.div`
    margin: 30px 0px px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledLabelText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 23px;
    margin: 0;
    color: white;
    text-align: center;
    margin: 0px 0px 0px 0px;
    transition: color 0.18s ease-in-out;
    transition: font-size 0.18s ease-in-out;

    ${props => props.isHovering && `
        font-size: 27px;
    `}
`

export const StyledImg = styled.img`
    cursor: pointer;
    height: 200px;
    transition: all 0.18s ease-in-out;

    ${props => props.isHovering && `
        height: 210px;
    `}
`

export const StyledBlurbText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    margin: 2px 0px 0px 0px;
    color: ${props => props.theme.textMain};
    max-width: 350px;
    text-align: center;
`

export const StyledRevealWindow = styled.div`
    width: 0;
    overflow: hidden;
    margin: 0px;
    opacity: 0;
    transition: all 0.18s ease-in-out;

    ${props => props.isHovering && `
        width: 60px;
        opacity: 1;
        margin: 0px 0px 0px 20px;
    `}
`

export const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0px 0px 0px;
    transition: margin 0.18s ease-in-out;

    ${props => props.isHovering && `
        margin: 20px 0px 10px 0px;
    `}
`

export const StyledBlurbSpan = styled.span`
    color: white;
`

export const StyledTechnologiesUsedText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    margin: 15px 0px 0px 0px;
    color: ${props => props.theme.textMain};
    max-width: 350px;
    text-align: center;
`