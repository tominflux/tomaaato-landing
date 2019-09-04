const child = require("child_process")

child.spawnSync("node", ["build.js"], {shell: true, stdio: [0, 1, 2]})
child.spawnSync("node", ["server.js"], {shell: true, stdio: [0, 1, 2]})