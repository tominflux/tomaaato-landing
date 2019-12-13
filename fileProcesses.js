var fs = require('fs')
var exports = module.exports = {};

/** 
 * Removes contents of a directory recursively.
 */
function recursiveDirectoryClean(rootPath) {
    //Read directory...
    var files = fs.readdirSync(rootPath)
    //Loop through files found...
    for (var i=0, limit=files.length; i<limit; i++) {
        var filePath = rootPath + "/" + files[i]
        var fileStat = fs.statSync(filePath)
        //If it's actually a file...
        if (fileStat.isFile()) {
            //Remove it.
            fs.unlinkSync(filePath)
        } 
        //If it's infact a directory...
        if (fileStat.isDirectory()) {
            //Make recursive call of this function
            //on the found directory.
            recursiveDirectoryClean(filePath)
        }
    }
    //Remove this directory.
    fs.rmdirSync(rootPath)
}

function cleanOrCreateDirectory(rootPath) {
    //Check if folder exists.
    if (fs.existsSync(rootPath)) {
        //If so, remove all of it's contents.
        //(And directory itself)
        recursiveDirectoryClean(
            rootPath
        )
    }
    //Either way it will need creating.
    fs.mkdirSync(rootPath)
}

exports.recursiveDirectoryClean = recursiveDirectoryClean
exports.cleanOrCreateDirectory = cleanOrCreateDirectory