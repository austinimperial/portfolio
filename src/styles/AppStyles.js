import styled from 'styled-components'

export const StyledAppContainer = styled.div`
    background-image: url('data:image/svg+xml;,<svg viewBox="0 0 93.768 42.39" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 L 93.768 0 L 93.768 7.563 L 87.214 10.101 L 66.397 30.449 L 41.678 26.166 L 22.491 38.089 L 0 42.39 Z" style="fill: rgb(11,1,0);"/>
        </svg>');
    background-repeat: no-repeat;
    background-color: ${props => props.theme.bgMain};
    //background-color: transparent;
`