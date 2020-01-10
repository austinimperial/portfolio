import styled from 'styled-components'

export const StyledContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    //border: 1px solid white;
    background-color: transparent;
`

export const StyledNavButton = styled.button`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    color: ${props => props.theme.textMain};
    appearance: none;
    border: none;
    background-color: transparent;
    margin: 3px 5px 5px 3px;
`