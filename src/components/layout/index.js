import React from 'react'
import {
    StyledRowWrapper,
    StyledColWrapper
} from './styles'

export function Row({children,start,end,center,style,showBorder}) {
    return (
        <StyledRowWrapper start={start} end={end} center={center} style={style} showBorder={showBorder}>
            {children}
        </StyledRowWrapper>
    )
}

export function Col({children,start,end,center,style,showBorder}) {
    return (
        <StyledColWrapper start={start} end={end} center={center} style={style} showBorder={showBorder}>
            {children}
        </StyledColWrapper>
    )
}