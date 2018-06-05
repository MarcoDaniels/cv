import * as React from 'react'
import { Query } from 'react-apollo'
import { getProjectsQuery } from '../Query/types'
import { loadProjects } from '../App.queries'

class GetProjects extends Query<getProjectsQuery> {}

const Projects: React.SFC = () => {

    return (
        <GetProjects query={loadProjects} ssr={false}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (
                        <div className="section">
                            <h2>Projects</h2>
                            <span className="loading">&nbsp;</span>
                        </div>
                    )
                }
                if (!data.user || !data.user.get) { return null }
                const user = data.user.get
                return (
                    <div className="section">
                        <h2>Projects</h2>
                        {user.projects && user.projects.map((project, i) => project && (
                            <div className="loaded info-header" key={i}>
                                <h3>
                                    <a href={project.homepage ? project.homepage : ''} target="_blank">
                                        {project.name}
                                    </a>
                                </h3>
                                <div className="info">{project.releaseDate}</div>
                                <div className="info-details">
                                {project.details && project.details.map((detail, d) => detail && (
                                    <div key={d}>{detail}</div>
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        </GetProjects>
    )
}

export default Projects