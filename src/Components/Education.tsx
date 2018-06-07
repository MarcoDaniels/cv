import * as React from 'react'
import { educationFragment } from '../Query/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as calendar from '@fortawesome/fontawesome-free-regular/faCalendarCheck'
import * as map from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

export type EducationProps = {
    user: educationFragment
}

const Education: React.SFC<EducationProps> = props => {
    const {education} = props.user

    return (
        <div className="section">
            <h2>Education</h2>
            {education && education.map((education, i) => education && (
                <div className="loaded info-header" key={i}>
                    <h3>
                        {education.degree} @ {education.institution}
                    </h3>
                    <div className="info"><FontAwesomeIcon icon={map}/> {education.location}</div>
                    <div className="info"><FontAwesomeIcon icon={calendar}/> {education.from} - {education.to}</div>
                    <div className="info-details">
                        {education.details && education.details.map((detail, d) => detail && (
                            <div key={d}>{detail}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education