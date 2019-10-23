const child = require("child_process")

child.spawnSync("node", ["./Build"], {shell: true, stdio: [0, 1, 2]})
child.spawnSync("node", ["./Server"], {shell: true, stdio: [0, 1, 2]})