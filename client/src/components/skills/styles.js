import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 100vh;
    color: ${props => props.theme.textMain};
    border: 1px solid white;
`

export const StyledRegText = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 15px;
    margin: 3vh 0 3vh 0;
    color: ${props => props.theme.textMain};
    text-align: center;
`

export const StyledSkillLabel = styled.p`
    min-height: 30px; 
    text-align: center;
    margin: 0;
`