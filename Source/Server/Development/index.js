const express = require("express")
const compression = require('compression')
const Bundler = require('parcel-bundler');

const app = express()
const port = parseInt(process.env.PORT) || 3000
const bundler = new Bundler("./Source/Static/index.html", {});

async function run() {
    //Run server
    app.use(compression())
    app.use(
        bundler.middleware()
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