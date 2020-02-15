import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    min-height: 90vh;
    color: ${props => props.theme.textMain};
    padding-bottom: 20px;
    box-sizing: border-box;
`

export const StyledProjectCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    min-height: 400px;
`