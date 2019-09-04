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
var Sphere_1 = require("../Sphere");
var Primitive_1 = require("../Primitive");
/**
 * A realised Primitive that takes on the form of a double sphere.
 * (Composed of two sub-primitives that take on the form of spheres.)
 * The two spheres are animated to join and split as an enhancement
 * of their Stretch animation.
 */
var DualSphere = /** @class */ (function (_super) {
    __extends(DualSphere, _super);
    /**
     * Instantialise sub-primitives.
     * Set up stretch animation of the two spheres.
     * Initialise fields & properties.
     * @param radius The radius of each sphere.
     * @param colour The colour of both spheres.
     * @param preSpawned If false, this primitive won't appear
     *  until it has been spawned.
     * @param emissive If true, the primitive appears to glow
     *  slightly.
     */
    function DualSphere(radius, colour, preSpawned, emissive) {
        if (colour === void 0) { colour = Sphere_1.default.colour; }
        if (preSpawned === void 0) { preSpawned = true; }
        if (emissive === void 0) { emissive = true; }
        var _this = 
        //Initialise Primitive
        _super.call(this, new THREE.Color(0x000000), new THREE.Geometry(), preSpawned, emissive) || this;
        //Set up sub-spheres and their animation settings.
        _this._sphere1 = new Sphere_1.default(radius, colour);
        _this._sphere1.stretch.phasor.max = 3.0;
        _this._sphere1.stretch.phasor.min = 0.33;
        _this._sphere2 = new Sphere_1.default(radius, colour);
        _this._sphere2.stretch.phasor.max = -3.0;
        _this._sphere2.stretch.phasor.min = -0.33;
        //Add THREEJS objects of sub-sphere to this primtive's
        //THREEJS object.
        _this.threeObject.add(_this._sphere1.threeObject, _this._sphere2.threeObject);
        //Initialise displacement magnitude property.s
        _this._displacementMagnitude = 5.0 / 3.0;
        return _this;
    }
    Object.defineProperty(DualSphere.prototype, "sphere1", {
        get: function () {
            return new ReadOnlySphere(this._sphere1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualSphere.prototype, "sphere2", {
        get: function () {
            return new ReadOnlySphere(this._sphere2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualSphere.prototype, "material", {
        get: function () {
            return this._sphere1.threeObject.material;
        },
        set: function (material) {
            this._sphere1.threeObject.material = material;
            this._sphere2.threeObject.material = material;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualSphere.prototype, "maxStretch", {
        get: function () {
            return this._sphere1.stretch.phasor.max;
        },
        /**
         * The largest magnitude that the sub-sphere's can stretch by.
         * (Measured in radii.)
         */
        set: function (value) {
            this._sphere1.stretch.phasor.max = value;
            this._sphere2.stretch.phasor.max = -value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualSphere.prototype, "minStretch", {
        get: function () {
            return this._sphere1.stretch.phasor.min;
        },
        /**
         * The smallest magnitude that the sub-sphere's can stretch by.
         * (Measured in radii.)
         * (<1.0 is squash)
         */
        set: function (value) {
            this._sphere1.stretch.phasor.min = value;
            this._sphere2.stretch.phasor.min = -value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualSphere.prototype, "cyclePeriod", {
        get: function () {
            return this._sphere1.stretch.phasor.cyclePeriod;
        },
        /**
         * The amount of time it takes for this dual-sphere to progress
         * through one loop of the stretch animation.
         */
        set: function (value) {
            this._sphere1.stretch.phasor.cyclePeriod = value;
            this._sphere2.stretch.phasor.cyclePeriod = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Begin the dual-sphere stretch and displacement animation.
     * @param initialPhase Where in the cycle the animation should
     *  begin (in radians).
     */
    DualSphere.prototype.beginAnimation = function (initialPhase) {
        if (initialPhase === void 0) { initialPhase = 0.0; }
        this._sphere1.stretch.phasor.begin(initialPhase);
        this._sphere2.stretch.phasor.begin(initialPhase);
    };
    /**
     * End the dual-sphere stretch and displacement animation.
     */
    DualSphere.prototype.endAnimation = function () {
        this._sphere1.stretch.phasor.end();
        this._sphere2.stretch.phasor.end();
    };
    Object.defineProperty(DualSphere.prototype, "isAnimating", {
        /**
         * True if the dual-sphere stretch and displacement animation
         * is currently rolling. False if not.
         */
        get: function () {
            return (this._sphere1.stretch.phasor.isRolling &&
                this._sphere2.stretch.phasor.isRolling);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualSphere.prototype, "displacementMagnitude", {
        get: function () {
            return this._displacementMagnitude;
        },
        /**
         * The max distance that the two spheres displace from each other
         * during the animation. (Measured in sphere radii.)
         */
        set: function (value) {
            this._displacementMagnitude = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Displaces a sphere based on the current state of the dual-sphere
     * stretch and displacement animation.
     * @param sphere
     */
    DualSphere.prototype.moveSphere = function (sphere) {
        //Get the current y-value on the phasor's wave.
        var phasorY = sphere.stretch.phasor.yValue;
        //Calculate how far away this y-value is from the point at which
        //it becomes a squash transform rather than a stretch.
        //y > 1.0 -> Stretch
        //y = 1.0 -> Nothing
        //y < 1.0 -> Squash
        var distanceFromSquashPoint = Math.abs(phasorY) - 1.0;
        //
        var displacementDirection = phasorY / Math.abs(phasorY);
        var displacementProportion = distanceFromSquashPoint > 0.0 ?
            (distanceFromSquashPoint) : 0.0;
        var displacementMagnitude = this._displacementMagnitude;
        var displacement = -displacementProportion *
            sphere.radius *
            displacementDirection *
            displacementMagnitude;
        sphere.position.y = displacement;
    };
    /**
     * Update the logistics of this dual-sphere.
     */
    DualSphere.prototype.update = function () {
        //Update root primitive.
        _super.prototype.update.call(this);
        //Update child primitives.
        this.moveSphere(this._sphere1);
        this.moveSphere(this._sphere2);
        this._sphere1.update();
        this._sphere2.update();
    };
    return DualSphere;
}(Primitive_1.default));
exports.default = DualSphere;
var ReadOnlySphere = /** @class */ (function () {
    function ReadOnlySphere(sphere) {
        this.sphere = sphere;
    }
    Object.defineProperty(ReadOnlySphere.prototype, "radius", {
        get: function () {
            return this.sphere.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlySphere.prototype, "stretch", {
        get: function () {
            return new ReadOnlyStretch(this.sphere.stretch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlySphere.prototype, "position", {
        get: function () {
            return this.sphere.position.clone();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlySphere.prototype, "vertices", {
        get: function () {
            return this.sphere.vertices.map(function (vertex) {
                return vertex.clone();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlySphere.prototype, "originalVertices", {
        get: function () {
            return this.sphere.stretch.originalVertices.map(function (vertex) {
                return vertex.clone();
            });
        },
        enumerable: true,
        configurable: true
    });
    return ReadOnlySphere;
}());
exports.ReadOnlySphere = ReadOnlySphere;
var ReadOnlyStretch = /** @class */ (function () {
    function ReadOnlyStretch(stretch) {
        this.stretch = stretch;
    }
    Object.defineProperty(ReadOnlyStretch.prototype, "phasor", {
        get: function () {
            return new ReadOnlyPhasor(this.stretch.phasor);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyStretch.prototype, "squashStretchFactor", {
        get: function () {
            return this.stretch.squashStretchFactor;
        },
        enumerable: true,
        configurable: true
    });
    return ReadOnlyStretch;
}());
exports.ReadOnlyStretch = ReadOnlyStretch;
var ReadOnlyPhasor = /** @class */ (function () {
    function ReadOnlyPhasor(phasor) {
        this.phasor = phasor;
    }
    Object.defineProperty(ReadOnlyPhasor.prototype, "min", {
        get: function () {
            return this.phasor.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "max", {
        get: function () {
            return this.phasor.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "cyclePeriod", {
        get: function () {
            return this.phasor.cyclePeriod;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "animationBegan", {
        get: function () {
            return this.phasor.animationBegan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "initialPhase", {
        get: function () {
            return this.phasor.initialPhase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "amplitude", {
        get: function () {
            return this.phasor.amplitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "equilibrium", {
        get: function () {
            return this.phasor.equilibrium;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "timePassed", {
        get: function () {
            return this.phasor.timePassed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "phase", {
        get: function () {
            return this.phasor.phase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "yValue", {
        get: function () {
            return this.phasor.yValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyPhasor.prototype, "isRolling", {
        get: function () {
            return this.phasor.isRolling;
        },
        enumerable: true,
        configurable: true
    });
    return ReadOnlyPhasor;
}());
exports.ReadOnlyPhasor = ReadOnlyPhasor;
