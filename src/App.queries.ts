import gql from 'graphql-tag'

const description = gql`
    fragment description on User {
        description
    }
`

const userInfo = gql`
    fragment userInfo on User {
        name
    }
`

const socialMedia = gql`
    fragment socialMedia on User {
        socialMedia {
            name
            identifier
            url
            displayName
        }
    }
`

export const loadApp = gql`
    query loadApp {
        user {
            get(userName: "marcodaniels") {
                name
                welcomeMessage
                ...description
                ...userInfo
                ...socialMedia
            }
        }
    }
    ${description}
    ${userInfo}
    ${socialMedia}
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