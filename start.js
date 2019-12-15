const child = require("child_process")

//Run parcel development server.
child.spawnSync(
    //Execute in context of node so that containers 
    //can do this without requiring cli tool to be
    //installed to OS.
    "node",
    [        
        "./Source/Server/Development/index.js",
    ],
    //Ensure process can print to console.
    {shell: true, stdio: [0, 1, 2]}
)