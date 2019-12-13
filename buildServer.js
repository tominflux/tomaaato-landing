const child = require("child_process")
const fileProcesses = require('../fileProcesses.js/index.js')

//CLEAN ES5 DIRECTORY
fileProcesses.cleanOrCreateDirectory("./ES5")

//TRANSPILE ES6 -> ES5 with Babel
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring babel cli to be
    //installed.
    "npx",
    [        
        "babel", "Source", 
        "--out-dir", "./ES5",
        //Only compile js (no assets).   
        "-x", '".jsx",".js"' 
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)