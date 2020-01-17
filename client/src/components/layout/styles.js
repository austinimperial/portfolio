import styled from 'styled-components'

export const StyledRowWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;

    ${props => props.start && `
        justify-content: flex-start;
    `}

    ${props => props.end && `
        justify-content: flex-end;
    `}

    ${props => props.center && `
        justify-content: center;
    `}

    ${props => props.showBorder && `
        border: 1px solid white
    `}
`

export const StyledColWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${props => props.start && `
        justify-content: flex-start;
    `}

    ${props => props.end && `
        justify-content: flex-end;
    `}

    ${props => props.center && `
        justify-content: center;
    `}

    ${props => props.showBorder && `
        border: 1px solid white
    `}
`