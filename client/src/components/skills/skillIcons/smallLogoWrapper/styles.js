import styled from 'styled-components'

export const StyledSmallLabel = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    color: ${props => props.theme.textMain};
    text-align: center;
`

export const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 120px;
`