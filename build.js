const browserify = require("browserify")
const babelify = require("babelify")
const uglifyify = require("uglifyify")
const fs = require("fs")

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