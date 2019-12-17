const fs = require('fs')
const express = require("express")
const compression = require('compression')
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as ReactRouterDOM from 'react-router-dom'
import App from '../../Components/App'

const app = express()
const port = parseInt(process.env.PORT) || 3000

//Pre-render React HTML for SSR
function renderHTML() {
    //Read empty HTML
    let emptyHTML = fs.readFileSync(
        "./dist/browser/index.html"
    ).toString()
    //Render React HTML
    let rootElement = React.createElement(
        ReactRouterDOM.StaticRouter,
        { location: "/" }, 
        React.createElement(App)
    )
    let reactHTML = 
        ReactDOMServer.renderToString(rootElement)
    //Compose App HTML
    let appHTML = emptyHTML.replace(
        "[App-Content]", reactHTML
    )
    return appHTML
}

//Run express server.
async function run() {
    //Run server
    app.use(compression())
    //Serve pre-rendered HTML for root directory request.
    app.get(
        "(\/$)", 
        (req, res) => { 
            res.send( renderHTML() ) 
        }
    )
    //Serve browser codebase of parcel production build as 
    //static files.
    app.use(
        "/",
        express.static('./dist/browser')
    )
    //Run express server.
    app.listen(
        port, () => {
            console.log(
                `Server listening on port ${port}!`
            )
        }
    )
}

run()