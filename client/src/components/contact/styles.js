import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 100vh;
    min-height: 600px;
    color: ${props => props.theme.textMain};
`

export const StyledEmailForm = styled.form`
    display: flex;
    flex-direction: column;
    ${props => props.small && `
        width: 90%;
    `}

    ${props => props.big && `
        width: 390px;
    `}
`

export const StyledTextArea = styled.textarea`
    border: 1px solid ${props => props.theme.textMain}
    background-color: transparent;
    color: white;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;

    ${props => props.small && `
        height: 35vh;
        width: 100%;
    `}

    ${props => props.big && `
        width: 100%;
        height: 200px;
    `}

    --invalid-color: ${props => props.theme.danger};
    ${props => props.invalid && `
    border: 1px solid var(--invalid-color)
    `}
`

export const StyledTextAreaLabel = styled.label`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 12px;
    margin: 5px 0px 5px 0px;
    color: ${props => props.theme.textMain};

    --invalid-color: ${props => props.theme.danger};
    ${props => props.invalid && `
        color: var(--invalid-color)
    `}
`

export const StyledSendButton = styled.button`
    appearance: none;
    flex-basis: 20%;
    border-radius: 20px;
    border: 1px solid ${props => props.theme.textMain};
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    background-color: transparent;
    min-width: 0;
    color: ${props => props.theme.textMain};
    padding: 5px 15px 5px 15px;
    margin: 15px 0px 0px 0px;
`

export const StyledSendButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledText = styled.p`
    width: 280px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    text-align: center;
`