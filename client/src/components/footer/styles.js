import styled from 'styled-components'

export const StyledContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-color: ${props => props.theme.bgDark};
    border-top: 1px solid ${props => props.theme.textMain};
`

export const StyledNavButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
`

export const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    margin: 0px 15px 0px 15px;
`