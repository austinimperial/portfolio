import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    min-height: 90vh;
    min-height: 350px;
    color: ${props => props.theme.textMain};

    ${props => props.small && `
        min-height: 700px;
    `}

    ${props => props.big && `
        min-height: 480px;
    `}
`

export const StyledBigText = styled.p`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 60px;
    margin: 0;
    text-shadow: 5px 5px #00595c;

    ${props => props.small && `
        padding: 0% 5% 0% 5%;
    `}

    ${props => props.highlighted && `
        color: white;
    `}
`

export const StyledBigTextSpan = styled.span`
    color: white;
`

export const StyledBlurb = styled.p`
    width: 100%;
    min-width: 0;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    box-sizing: border-box;

    ${props => props.small && `
        padding: 0% 5% 0% 5%;
    `}
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
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    --text-main: ${props => props.theme.textMain};
    --bg-main: ${props => props.theme.bgMain};
    ${props => props.big && `
        :hover {
            background-color: var(--text-main);
            color: var(--bg-main);
        }    
    `}

    ${props => props.small && `
        padding: 0% 5% 0% 5%;
    `}
`

export const StyledTagSmashContainer = styled.div`
    display: flex;
    justify-content: center;

    ${props => props.small && `
        padding: 0% 5% 0% 5%;
    `}
`

export const StyledButtonContainer = styled.div`
    display: flex;

    ${props => props.small && `
        padding: 0% 5% 0% 5%;
    `}
`