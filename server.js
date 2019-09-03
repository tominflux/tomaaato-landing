const fs = require("fs")
const express = require("express")
const compression = require('compression')

let app = express()
let port = parseInt(process.env.PORT) || 3000

async function run() {
    app.use(compression())
    let appHTML = await fs.readFileSync(
        "./Source/boilerplate.html"
    ).toString()
    app.get(
        "(?!(/bundle.js|/styles.css|/imgs|/fonts|/css))*", 
        (req, res) => {
            res.send(appHTML)
        }
    )
    app.use(
        "/",
        express.static('./Static')
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
