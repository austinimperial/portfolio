import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 90vh;
    min-height: 400px;
    color: ${props => props.theme.textMain};
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