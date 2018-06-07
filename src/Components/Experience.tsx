import * as React from 'react'
import { experienceFragment } from '../Query/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as calendar from '@fortawesome/fontawesome-free-regular/faCalendarCheck'
import * as map from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

export type ExperienceProps = {
    user: experienceFragment
}

const Experience: React.SFC<ExperienceProps> = props => {
    const {experience} = props.user

    return (
        <div className="section">
            <h2>Experience</h2>
            {experience && experience.map((item, i) => item && (
                <div className="loaded info-header" key={i}>
                    <h3>{item.position}</h3>
                    <div className="info"><FontAwesomeIcon icon={map}/> {item.location}</div>
                    <div className="info"><FontAwesomeIcon icon={calendar}/> {item.from} - {item.to}</div>
                    <div className="info-details">
                        {item.details && item.details.map((detail, d) => detail && (
                            <div key={d}>{detail}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience