const express = require("express")
const fs = require('fs')
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as ReactRouterDOM from 'react-router-dom'
import App from '../../Components/App'
const compression = require('compression')

const app = express()
const port = parseInt(process.env.PORT) || 3000


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

async function run() {
    //Run server
    app.use(compression())
    app.get(
        "(\/$)", 
        (req, res) => { 
            res.send( renderHTML() ) 
        }
    )
    app.use(
        "/",
        express.static('./dist/browser')
    )
    app.listen(
        port, () => {
            console.log(
                `Server listening on port ${port}!`
            )
        }
    )
}

run()