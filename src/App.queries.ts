import gql from 'graphql-tag'

const description = gql`
    fragment description on User {
        description
    }
`

const userInfo = gql`
    fragment userInfo on User {
        name
        image
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

const skills = gql`
    fragment skills on User {
        skills {
            name
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
                ...skills
            }
        }
    }
    ${description}
    ${userInfo}
    ${socialMedia}
    ${skills}
`

const experience = gql`
    fragment experience on User {
        experience {
            position
            workplace
            from
            to
            location
            details
        }
    }
`

const education = gql`
    fragment education on User {
        education {
            degree
            institution
            from
            to
            location
            details
        }
    }
`

const projects = gql`
    fragment projects on User {
        projects {
            name
            homepage
            releaseDate
            details
        }
    }
`

export const loadData = gql`
    query loadData {
        user {
            get(userName: "marcodaniels") {
                ...experience
                ...education
                ...projects
            }
        }
    }
    ${experience}
    ${education}
    ${projects}
`
