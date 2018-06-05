import gql from 'graphql-tag'

export const loadApp = gql`
    query loadApp {
        user {
            get(userName: "marcodaniels") {
                name
                welcomeMessage
                description
            }
        }
    }
`

export const loadSkills = gql`
    query getSkills {
        user {
            get(userName: "marcodaniels") {
                skills {
                    name
                }
            }
        }
    }
`

export const loadExperience = gql`
    query getExperience {
        user {
            get(userName: "marcodaniels") {
                experience {
                    position
                    workplace
                    from
                    to
                    location
                    details
                }
            }
        }
    }
`

export const loadProjects = gql`
    query getProjects {
        user {
            get(userName: "marcodaniels") {
                projects {
                    name
                    homepage
                    releaseDate
                    details
                }
            }
        }
    }
`

export const loadEducation = gql`
    query getEducation {
        user {
            get(userName: "marcodaniels") {
                education {
                    degree
                    institution
                    from
                    to
                    location
                    details
                }
            }
        }
    }
`