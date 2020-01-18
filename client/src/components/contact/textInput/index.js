import React, { useState } from 'react'
import {
    StyledInput,
    StyledLabel,
    StyledContainer
} from './styles'

function TextInput({label,value,onChange,invalid}) {
    const [isClicked,setIsClicked] = useState(false)

    return (
        <StyledContainer>
            <StyledInput 
                onChange={onChange}
                value={value}
                onFocus={() => setIsClicked(true)}
                onBlur={e => (e.target.value.length === 0) && setIsClicked(false)}
                big 
                invalid={invalid}
            />
            <StyledLabel 
                isClicked={isClicked}
                invalid={invalid}
            >
                {label}
            </StyledLabel>
        </StyledContainer>
    )
}

export default TextInput