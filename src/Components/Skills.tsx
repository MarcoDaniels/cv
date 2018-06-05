import * as React from 'react'
import { Query } from 'react-apollo'
import { getSkillsQuery } from '../Query/types'
import { loadSkills } from '../App.queries'

class GetSkills extends Query<getSkillsQuery> {}

const Skills: React.SFC = () => {

    return (
        <GetSkills query={loadSkills} ssr={false}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (
                        <div className="skills">
                            <span className="loading">&nbsp;</span>
                        </div>
                    )
                }

                if (!data.user || !data.user.get) { return null }
                const user = data.user.get
                return (
                    <div className="skills">
                        {user.skills && user.skills.map((item, i) => item && (
                            <span className="skill-name loaded" key={i}>{item.name}</span>
                        ))}
                    </div>
                )
            }}
        </GetSkills>
    )
}

export default Skills