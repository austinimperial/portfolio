import React, { useContext } from 'react'
import { Parallax } from 'react-parallax';
import { ScreenSizesContext } from 'globalState/screenSizes/index'
const tagSmashBase = require('images/tagSmash/tagSmashBase.svg')
const sparkLayer1 = require('images/tagSmash/sparkLayer1.svg')
const sparkLayer2 = require('images/tagSmash/sparkLayer2.svg')
const sparkLayer3 = require('images/tagSmash/sparkLayer3.svg')
const sparkLayer4 = require('images/tagSmash/sparkLayer4.svg')

// this is and HOC that wraps all the website sections ('intro','about','contact', etc...)
function TagSmashParallax({children}) {

    // global state
    const {xxs,xs,sm} = useContext(ScreenSizesContext)

    return (
        <Parallax
            bgImage={tagSmashBase}
            bgImageAlt="tagSmashBase"
            strength={100}
            bgImageStyle={{
                height:'450px',
                top:`${(xxs || xs || sm) ? '360px' : '120px'}`,
                left:`${(xxs || xs || sm) ? '50%': '75%'}`
            }}
        >
            <Parallax
                bgImage={sparkLayer1}
                bgImageAlt="sparkLayer1"
                strength={400}
                bgImageStyle={{
                    height:'200px',
                    top:`${(xxs || xs || sm) ? '645px' : '420px'}`,
                    left:`${(xxs || xs || sm) ? '50%': '76%'}`
                }}
            >
                <Parallax
                    bgImage={sparkLayer2}
                    bgImageAlt="sparkLayer2"
                    strength={900}
                    bgImageStyle={{
                        height:'220px',
                        top:`${(xxs || xs || sm) ? '855px' : '640px'}`,
                        left:`${(xxs || xs || sm) ? '50%': '75%'}`
                    }}
                >
                    <Parallax
                        bgImage={sparkLayer3}
                        bgImageAlt="sparkLayer3"
                        strength={1300}
                        bgImageStyle={{
                            height:'330px',
                            top:`${(xxs || xs || sm) ? '995px' : '770px'}`,
                            left:`${(xxs || xs || sm) ? '50%': '75%'}`
                        }}
                    >
                        <Parallax
                            bgImage={sparkLayer4}
                            bgImageAlt="sparkLayer4"
                            strength={2000}
                            bgImageStyle={{
                                height:'500px',
                                top:`${(xxs || xs || sm) ? '1210px' : '1030px'}`,
                                left:`${(xxs || xs || sm) ? '50%': '75%'}`
                            }}
                        >
                            {children}
                        </Parallax>
                    </Parallax>
                </Parallax>
            </Parallax>
        </Parallax>
    )
}

export default TagSmashParallax