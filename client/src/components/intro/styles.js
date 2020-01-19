import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 90vh;
    min-height: 350px;
    color: ${props => props.theme.textMain};
`

export const StyledBigText = styled.p`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 60px;
    margin: 0;
    text-shadow: 5px 5px #00595c;

    ${props => props.highlighted && `
        color: white;
    `}
`

export const StyledBigTextSpan = styled.span`
    color: white;
`

export const StyledBlurb = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
`

export const StyledResumeButton = styled.button`
    appearance: none;
    border-radius: 20px;
    border: 1px solid ${props => props.theme.textMain};
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    background-color: transparent;
    min-width: 0;
    color: ${props => props.theme.textMain};
    padding: 5px 15px 5px 15px;
    margin: 10px 0px 0px 0px;
`