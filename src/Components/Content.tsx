import * as React from 'react'
import BasicInfo from './BasicInfo'
import SocialMedia from './SocialMedia'
import Skills from './Skills'
import Description from './Description'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import { descriptionFragment, socialMediaFragment, userInfoFragment } from '../Query/types'

export type ContentProps = {
    description: descriptionFragment
    info: userInfoFragment
    socialMedia: socialMediaFragment
}

const Content: React.SFC<ContentProps> = props => {
    const {description, info, socialMedia} = props

    return (
        <div className="container content">
            <div className="row">
                <div className="four columns">
                    <BasicInfo user={info}/>
                    <hr/>
                    <SocialMedia user={socialMedia}/>
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