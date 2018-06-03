import * as fs from 'fs'
import * as React from 'react'
import * as express from 'express'
import { https, HttpsFunction } from 'firebase-functions'
import { renderToString } from 'react-dom/server'
import App from './App'
import * as path from 'path'

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
    const html = renderToString(React.createElement(App))
    const finalHtml = index.replace('{{SSR}}', html)
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    res.send(finalHtml)
})

export const ssr: HttpsFunction = https.onRequest(server)