const express = require("express")
const compression = require('compression')

const app = express()
const port = parseInt(process.env.PORT) || 3000

async function run() {
    //Run server
    app.use(compression())
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