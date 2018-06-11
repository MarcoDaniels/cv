import * as React from 'react'
import { render } from 'react-dom'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './App'
import './Styles/normalize.css'
import './Styles/skeleton.css'
import './Styles/styles.css'
import './Styles/main.css'

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPH_QL_API,
})

const client = new ApolloClient({
    link: httpLink,
    ssrForceFetchDelay: 100,
    cache: new InMemoryCache()
})

const WrappedApp = (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))