import React, { useState } from 'react'
export const SectionRefsForScrollContext = React.createContext()

function SectionRefsForScrollProvider ({children}) {
    const [refs,setRefs] = useState({
        contact:null,
        intro:null,
        projects:null,
        skills:null
    })

    const scrollToSection = (section) => {
        const sectionDiv = refs[section].current
        window.scroll({
            top: sectionDiv.offsetTop,
            behavior:'smooth'
        })
    }

    const updateRefs = (changes) => {
        setRefs(prevRefs => {
            return {...prevRefs, ...changes}
        })
    }
    
    const value = {
        refs,
        setRefs,
        scrollToSection,
        updateRefs
    }

    return (
        <SectionRefsForScrollContext.Provider value={value} >
            {children}
        </SectionRefsForScrollContext.Provider>
    )
}

export default SectionRefsForScrollProvider