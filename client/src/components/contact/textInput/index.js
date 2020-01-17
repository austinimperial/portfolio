import React, { useState } from 'react'
import {
    StyledInput,
    StyledLabel,
    StyledContainer
} from './styles'

function TextInput({label}) {
    const [isClicked,setIsClicked] = useState(false)
    return (
        <StyledContainer>
            <StyledInput 
                onFocus={() => setIsClicked(true)}
                onBlur={e => (e.target.value.length === 0) && setIsClicked(false)}
                big 
            />
            <StyledLabel 
                isClicked={isClicked}
            >
                {label}
            </StyledLabel>
        </StyledContainer>
    )
}

export default TextInput