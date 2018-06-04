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