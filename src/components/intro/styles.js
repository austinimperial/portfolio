import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    height: 90vh;
    color: ${props => props.theme.textMain};
    border: 1px solid white;
`

export const StyledColumn = styled.div`
    //border: 1px solid white;
    display: flex;
    flex-direction: column
    justify-content: center

    ${props => props.left && `
        flex-basis: 60%;
    `}

    ${props => props.right && `
        flex-basis: 40%;
    `}
`

export const StyledRow = styled.div`
    //border: 1px solid white;
    display: flex;
    justify-content: center;
`

export const StyledNameIntro = styled.p`
    font-family: Montserrat;
    font-weight: 900;
    font-size: 60px;
    margin: 0;
    text-shadow: 5px 5px #00595c;
`

export const StyledBlurb = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
`