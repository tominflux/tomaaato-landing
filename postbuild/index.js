const pfs = require("./pfs")
const path = require("path")

const htmlLocation = "./docs/index.html"
const routes = [
    "/",
    "/bio",
    "/bands",
    "/performances",
    "/contact"
]

async function postbuild() {
    const data = await pfs.readFile(htmlLocation)
    const html = data.toString()
    for(const route of routes) {
        const routeDir = path.join(
            "./docs", route
        )
        const dirExists = await pfs.exists(routeDir)
        if (!dirExists) {
            pfs.mkdir(routeDir)
        }
        const newHtmlPath = path.join(
            routeDir, "/index.html"
        )
        console.log(newHtmlPath)
        await pfs.writeFile(newHtmlPath, html)
    }
}

postbuild()