import gql from 'graphql-tag'

export const loadApp = gql`
    query loadApp {
        user {
            get(userName: "marcodaniels") {
                name
                welcomeMessage
            }
        }
    }
`