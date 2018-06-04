import * as React from 'react'
import { getSkillsQuery } from '../Query/types'
import { Query } from 'react-apollo'
import { loadSkills } from '../App.queries'

class GetSkills extends Query<getSkillsQuery> {}

const Skills: React.SFC = () => {

    return (
        <GetSkills query={loadSkills} ssr={false}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (
                        <div style={{textAlign: 'center'}}>
                            Loading ...
                        </div>
                    )
                }

                if (!data.user || !data.user.get) { return null }
                const user = data.user.get
                return (
                    <div style={{textAlign: 'center'}}>
                        {user.skills && user.skills.map((item, i) => item && (
                            <span key={i}>{item.name} </span>
                        ))}
                    </div>
                )
            }}
        </GetSkills>
    )
}

export default Skills