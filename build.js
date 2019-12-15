const child = require("child_process")

//Build browser codebase
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring cli tool to be
    //installed to OS.
    "npx",
    [        
        "parcel", "build", "./Source/Static/index.html",
        "-d", "./dist/browser"
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)

//Build server codebase
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring cli tool to be
    //installed to OS.
    "npx",
    [        
        "parcel", "build", "./Source/Server/Production/index.js",
        "--target", "node",
        "-d", "./dist/server"
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)