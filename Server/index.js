const fs = require('fs')
const express = require("express")
const compression = require('compression')
const React = require('react')
const ReactDOMServer = require('react-dom/server');
const ReactRouterDOM = require("react-router-dom");

//LOAD COMPONENT TREE
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
const AppComponent = _interopRequireDefault(require('../ES5/Components/App'))

let app = express()
let port = parseInt(process.env.PORT) || 3000

async function run() {
    //Generate HTML
    let boilerplateHTML = await fs.readFileSync(
        "./Source/index.html"
    ).toString()
    let rootElement = React.createElement(
        ReactRouterDOM.StaticRouter,
        { location: "/" }, 
        React.createElement( AppComponent["default"] )
    )
    let appHTML = boilerplateHTML.replace(
        "[App-Content]",
        ReactDOMServer.renderToString( rootElement )
    )
    //Run server
    app.use(compression())
    app.get(
        "(?!(/public_html))*", 
        (req, res) => { res.send("Hello Worl") }
    )
    app.use(
        "/public_html/",
        express.static('./dist')
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
