import * as React from 'react'
import BasicInfo from './BasicInfo'
import SocialMedia from './SocialMedia'
import Skills from './Skills'
import Description from './Description'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

const Content: React.SFC = props => {

    return (
        <div className="container">
            <div className="row">
                <div className="four columns" style={{background: 'WhiteSmoke'}}>
                    <BasicInfo/>
                    <hr/>
                    <SocialMedia/>
                </div>
                <div className="eight columns" style={{background: 'LightGray'}}>
                    <Skills/>
                    <Description/>
                    <Experience/>
                    <Projects/>
                    <Education/>
                </div>
            </div>
        </div>
    )
}

export default Content