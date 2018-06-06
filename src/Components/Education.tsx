import * as React from 'react'
import { Query } from 'react-apollo'
import { getEducationQuery } from '../Query/types'
import { loadEducation } from '../App.queries'

class GetEducation extends Query<getEducationQuery> {}

const Education: React.SFC = () => {

    return (
        <GetEducation query={loadEducation} ssr={false}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (
                        <div className="section">
                            <span className="loading">&nbsp;</span>
                        </div>
                    )
                }
                if (!data.user || !data.user.get) { return null }
                const user = data.user.get
                return (
                    <div className="section">
                        <h2>Education</h2>
                        {user.education && user.education.map((education, i) => education && (
                            <div className="loaded info-header" key={i}>
                                <h3>
                                    {education.degree} @ {education.institution}
                                </h3>
                                <div className="info">{education.from} - {education.to}</div>
                                <div className="info">{education.location}</div>
                                <div className="info-details">
                                    {education.details && education.details.map((detail, d) => detail && (
                                        <div key={d}>{detail}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </GetEducation>
    )
}

export default Education