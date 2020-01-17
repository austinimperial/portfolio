import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 100vh;
    color: ${props => props.theme.textMain};
    border: 1px solid white;
`

export const StyledProjectCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`