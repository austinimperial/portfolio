import styled from 'styled-components'

export const StyledHeader = styled.p`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 55px;
    margin: 0px 0px 20px 0px;
    color: white;
    text-align: center;
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
    outline: none;
    cursor: pointer;
`