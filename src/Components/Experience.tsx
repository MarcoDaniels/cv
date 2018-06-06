import * as React from 'react'
import { Query } from 'react-apollo'
import { getExperienceQuery } from '../Query/types'
import { loadExperience } from '../App.queries'

class GetExperience extends Query<getExperienceQuery> {}

const Experience: React.SFC = () => {

    return (
        <GetExperience query={loadExperience} ssr={false}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (
                        <div className="section section-big">
                            <span className="loading">&nbsp;</span>
                        </div>
                    )
                }

                if (!data.user || !data.user.get) { return null }
                const user = data.user.get
                return (
                    <div className="section">
                        <h2>Experience</h2>
                        {user.experience && user.experience.map((item, i) => item && (
                            <div className="loaded info-header" key={i}>
                                <h3>{item.position}</h3>
                                <div className="info">{item.workplace}, {item.location}</div>
                                <div className="info">{item.from} - {item.to}</div>
                                <div className="info-details">
                                {item.details && item.details.map((detail, d) => detail && (
                                    <div key={d}>{detail}</div>
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </GetExperience>
    )
}

export default Experience