const child = require("child_process")


/*
//Run parcel development server.
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring cli tool to be
    //installed to OS.
    "npx",
    [     
        "nodemon", "./Source/Server/Development/index.js",
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)
*/

//Run parcel development server.
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring cli tool to be
    //installed to OS.
    "npx",
    [     
        "parcel", "./Source/Static/index.html",
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)