import * as React from 'react'
import BasicInfo from './BasicInfo'
import SocialMedia from './SocialMedia'
import Skills from './Skills'
import Description, { DescriptionProps } from './Description'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

const Content: React.SFC<DescriptionProps> = props => {
    const {description} = props
    return (
        <div className="container content">
            <div className="row">
                <div className="four columns" style={{border: '1px solid black', textAlign: 'center'}}>
                    <BasicInfo/>
                    <hr/>
                    <SocialMedia/>
                </div>
                <div className="eight columns">
                    <Skills/>
                    <Description description={description}/>
                    <Experience/>
                    <Education/>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default Content