const child = require("child_process")

//Rollup server source into single ES5 script.
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring rollup cli to be
    //installed.
    "node",
    [        
        "./dist/server/index.js",
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)