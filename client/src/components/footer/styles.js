import styled from 'styled-components'

export const StyledContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    background-color: transparent;
    background-color: ${props => props.theme.bgDark};
    border-top: 1px solid ${props => props.theme.textMain};
`