import * as fs from 'fs'
import * as path from 'path'
import * as React from 'react'
import * as express from 'express'
import * as fetch from 'cross-fetch'

import { https, HttpsFunction } from 'firebase-functions'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'

require('dotenv').config()

const server = express()

const index = fs.readFileSync(__dirname + '/../index.html', 'utf8')

const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico'
]

staticFiles.forEach(file => {
    server.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../', req.url)
        res.sendFile(filePath)
    })
})

server.get('**', (req, res) => {
    // i know...
    const fetching: any = fetch

    const httpLink = createHttpLink({
        uri: process.env.REACT_APP_GRAPH_QL_API,
        fetch: fetching
    })

    const client = new ApolloClient({
        ssrMode: true,
        link: httpLink,
        cache: new InMemoryCache()
    })

    const WrappedApp = (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    )

    const renderer = renderToStringWithData(WrappedApp)
    renderer.then(content => {
        const finalHtml = index.replace('{{SSR}}', content)
        res.status(200)
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
        res.send(finalHtml)
        res.end()
    }).catch(error => {
        console.log('Error: ', error)
        console.log('api: ', process.env.REACT_APP_GRAPH_QL_API)
        res.status(500)
        res.send({
            success: false,
            message: error
        })
        res.end()
    })
})

export const ssr: HttpsFunction = https.onRequest(server)