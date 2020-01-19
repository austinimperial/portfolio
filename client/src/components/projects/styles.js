import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 90vh;
    min-height: 400px;
    color: ${props => props.theme.textMain};
`

export const StyledProjectCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`