import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    border: 1px solid white;
`

export const StyledLabelText = styled.p`
        font-family: Montserrat;
        font-weight: 500;
        font-size: 30px;
        margin: 0;
        color: ${props => props.theme.textMain};
        text-align: center;
`