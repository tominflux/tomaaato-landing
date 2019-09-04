"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var Primitive_1 = require("../Primitive");
var Stretch_1 = require("./Stretch");
/**
 * A realised Primitive that takes on the form of a Sphere.
 */
var Sphere = /** @class */ (function (_super) {
    __extends(Sphere, _super);
    /**
     * Generate's the Primitive's geometry by taking the
     * sphere's radius measurement.
     * @param radius The radius of the sphere.
     * @param colour The colour of the sphere.
     * @param preSpawned If false, this primitive won't appear
     *  until it has been spawned.
     */
    function Sphere(radius, colour, preSpawned) {
        if (colour === void 0) { colour = Sphere._colour; }
        if (preSpawned === void 0) { preSpawned = true; }
        var _this = _super.call(this, colour, new THREE.SphereGeometry(radius, 16, 24), preSpawned, true) || this;
        _this._radius = radius;
        _this._stretch = new Stretch_1.default(_this);
        return _this;
    }
    Object.defineProperty(Sphere, "colour", {
        get: function () {
            return this._colour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sphere.prototype, "radius", {
        /**
         * The radius of this sphere.
         */
        get: function () {
            return this._radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sphere.prototype, "stretch", {
        /**
         * The stretch animation controller for this sphere.
         */
        get: function () {
            return this._stretch;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update the real-time logistics of this sphere.
     */
    Sphere.prototype.update = function () {
        _super.prototype.update.call(this);
        this._stretch.update();
    };
    /**
     * By default, a sphere's colour will be blue.
     */
    Sphere._colour = new THREE.Color(0x0000ff);
    return Sphere;
}(Primitive_1.default));
exports.default = Sphere;
