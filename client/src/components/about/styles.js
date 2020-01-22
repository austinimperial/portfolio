import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 100vh;
    min-height: 600px;
    color: ${props => props.theme.textMain};
`

export const StyledHeadshot = styled.img`
    height: 300px;
    clip-path: circle(35% at 54% 54%);
    right: 70px;
`

export const StyledBlurbText = styled.p`
    font-family: ${props => props.theme.fontMain};
    font-weight: 500;
    font-size: 16px;
    margin: 10px 0px 0px 15px;
    color: ${props => props.theme.textMain};
    max-width: 350px;
    text-align: left;
`

export const StyledPicAndBlurbContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`