"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A set of static constants that are known at the time of
 * development.
 */
var GlobalConstants = /** @class */ (function () {
    function GlobalConstants() {
    }
    GlobalConstants.containerID = "mys-game-container";
    GlobalConstants.dialogueID = "mys-game-dialogue";
    GlobalConstants.dialogueMinDistance = 2.66;
    GlobalConstants.dialogueProgressionKey = "Enter";
    GlobalConstants.playerMovementSpeed = 0.12;
    GlobalConstants.playerOrientationSpeed = 0.0033;
    GlobalConstants.playerLowerCameraLimit = -Math.PI * 2.0 / 3.0;
    GlobalConstants.playerUpperCameraLimit = Math.PI * 2.0 / 3.0;
    GlobalConstants.primitiveSpawnPeriod = 1.5;
    return GlobalConstants;
}());
exports.default = GlobalConstants;
