import styled from 'styled-components'

export const StyledInput = styled.input`
    padding: 6px 0px 6px 0px;
    margin: 5px 0px 5px 0px;
    font-size: 16px;
    color: white;
    appearence: none;
    border: 0px;
    border-bottom: 1px solid ${props => props.theme.textMain};
    background-color: transparent;
    outline: none;
    z-index: 1;
    box-sizing: border-box;
`

export const StyledLabel = styled.label`
    position: relative;
    z-index: 0;
    left: 0px;
    top: -25px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 12px;
    margin: 0;
    color: ${props => props.theme.textMain};
    transition: top 0.1s ease-in-out;
    box-sizing: border-box;

    ${props => props.isClicked && `
        top: -49px;
    `}
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`