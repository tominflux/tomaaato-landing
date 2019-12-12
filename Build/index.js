const child = require("child_process")
const fileProcesses = require('./fileProcesses.js')
const browserify = require("browserify")
const babelify = require("babelify")
const uglifyify = require("uglifyify")
const fs = require("fs")

//CLEAN ES5 DIR
fileProcesses.cleanOrCreateDirectory("./ES5")

//TRANSPILE ES6 -> ES5
child.spawnSync(
    "npx", [
        "babel", "Source", "--out-dir", "./ES5"
    ],
    {shell: true, stdio: [0, 1, 2]}
)





//NO LONGER USING BROWSERIFY \/\/

/*
//Build bundle.js
console.log("Building App Bundle...")
browserify(
    "./Source/index.jsx",
    {
        extensions: ['.jsx'],
        debug: true
    }
)
.transform(babelify, {
    presets: ["@babel/preset-env", "@babel/preset-react"]
})
//.transform(uglifyify, {global: true})
.bundle()
.pipe(
    fs.createWriteStream(
        "./Static/bundle.js"
    )
)
.on("finish", ()=> {
    console.log("App Bundle Built")
})
*/
