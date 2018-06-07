import * as React from 'react'
import { projectsFragment } from '../Query/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as calendar from '@fortawesome/fontawesome-free-regular/faCalendarCheck'

export type ProjectsProps = {
    user: projectsFragment
}

const Projects: React.SFC<ProjectsProps> = props => {
    const {projects} = props.user

    return (
        <div className="section">
            <h2>Projects</h2>
            {projects && projects.map((project, i) => project && (
                <div className="loaded info-header" key={i}>
                    <h3>
                        <a href={project.homepage ? project.homepage : ''} target="_blank">
                            {project.name}
                        </a>
                    </h3>
                    <div className="info"><FontAwesomeIcon icon={calendar}/> {project.releaseDate}</div>
                    <div className="info-details">
                    {project.details && project.details.map((detail, d) => detail && (
                        <div key={d}>{detail}</div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects