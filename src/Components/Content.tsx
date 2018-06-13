import * as React from 'react'
import BasicInfo from './BasicInfo'
import Skills from './Skills'
import Description from './Description'
import { descriptionFragment, skillsFragment, socialMediaFragment, userInfoFragment } from '../Query/types'
import Data from './Data'

export type ContentProps = {
    description: descriptionFragment
    info: userInfoFragment
    socialMedia: socialMediaFragment
    skills: skillsFragment
}

const Content: React.SFC<ContentProps> = props => {
    const {description, info, socialMedia, skills} = props

    return (
        <div className="container content">
            <div className="row">
                <div className="four columns">
                    <BasicInfo user={info} socialMedia={socialMedia}/>
                </div>
                <div className="eight columns">
                    <Skills user={skills}/>
                    <Description description={description}/>
                    <Data/>
                </div>
            </div>
        </div>
    )
}

export default Content