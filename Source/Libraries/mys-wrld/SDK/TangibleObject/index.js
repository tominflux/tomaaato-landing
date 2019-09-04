"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An object that can be added to a World and is
 * visible or able to be interacted with.
 */
var TangibleObject = /** @class */ (function () {
    /**
     * Instantialises TangibleObject.
     */
    function TangibleObject() {
    }
    Object.defineProperty(TangibleObject.prototype, "position", {
        /**
         * The coordinates of the object within it's parent world.
         * By default this is equivalent to the position of the
         * object's THREEJS object.
         */
        get: function () {
            return this.threeObject.position;
        },
        /**
         * The coordinates of the object within it's parent world.
         * By default this is equivalent to the position of the
         * object's THREEJS object, therefore updating this position
         * will update the THREEJS object position.
         */
        set: function (newPosition) {
            this.threeObject.translateX(-this.threeObject.position.x
                + newPosition.x);
            this.threeObject.translateY(-this.threeObject.position.y
                + newPosition.y);
            this.threeObject.translateZ(-this.threeObject.position.z
                + newPosition.z);
        },
        enumerable: true,
        configurable: true
    });
    return TangibleObject;
}());
exports.default = TangibleObject;
