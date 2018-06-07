import * as React from 'react'
import { skillsFragment } from '../Query/types'

export type SkillsProps = {
    user: skillsFragment
}

const Skills: React.SFC<SkillsProps> = props => {
    const {skills} = props.user

    return (
        <div className="skills">
            {skills && skills.map((item, i) => item && (
                <span className="skill-name loaded" key={i}>{item.name}</span>
            ))}
        </div>
    )
}

export default Skills