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
var TangibleObject_1 = require("../../TangibleObject");
var Phasor_1 = require("../../Phasor");
var GlobalConstants_1 = require("../../../GlobalConstants");
/**
 * Describes if a primitive is spawned, despawned or
 * in the process of spawning/despawning.
 */
var PrimitiveSpawnState;
(function (PrimitiveSpawnState) {
    PrimitiveSpawnState[PrimitiveSpawnState["Spawning"] = 0] = "Spawning";
    PrimitiveSpawnState[PrimitiveSpawnState["Spawned"] = 1] = "Spawned";
    PrimitiveSpawnState[PrimitiveSpawnState["Despawning"] = 2] = "Despawning";
    PrimitiveSpawnState[PrimitiveSpawnState["Despawned"] = 3] = "Despawned";
})(PrimitiveSpawnState = exports.PrimitiveSpawnState || (exports.PrimitiveSpawnState = {}));
/**
 * An abstract 3D shape that can be defined mathematically
 * (via no use of 3D modelling).
 */
var Primitive = /** @class */ (function (_super) {
    __extends(Primitive, _super);
    /**
     * Initialise TangibleObject
     * @param colour The colour of the shape. (Will apply
     *  to the shape's material.)
     * @param geometry The geometry of the shape. (Will
     *  define the shape of the primitive's mesh.)
     * @param preSpawned If false, this primitive won't appear
     *  until it has been spawned.
     * @param emissive If true, the primitive appears to glow
     *  slightly.
     */
    function Primitive(colour, geometry, preSpawned, emissive) {
        if (preSpawned === void 0) { preSpawned = true; }
        if (emissive === void 0) { emissive = false; }
        var _this = 
        //Initialise tangible object.
        _super.call(this) || this;
        //Record colour.
        _this._colour = colour;
        //Set up material and mesh.
        _this._material = new THREE.MeshPhongMaterial({
            color: _this._colour,
            shininess: 50.0,
            specular: new THREE.Color(0x222222),
            emissive: _this._colour,
            emissiveIntensity: emissive ? 0.2 : 0.0
        });
        _this._mesh = new THREE.Mesh(geometry, _this._material);
        _this._mesh.castShadow = true;
        //Set up spawning mechanisms
        _this._spawnPhasor = new Phasor_1.default();
        _this._spawnPhasor.cyclePeriod
            = GlobalConstants_1.default.primitiveSpawnPeriod;
        if (!preSpawned) {
            _this.threeObject.scale.set(0.0, 0.0, 0.0);
            _this._spawnState = PrimitiveSpawnState.Despawned;
        }
        else {
            _this._spawnState = PrimitiveSpawnState.Spawned;
        }
        return _this;
    }
    Object.defineProperty(Primitive.prototype, "threeObject", {
        /**
         * All TangibleObjects must provide a THREEJS object.
         * The Primitive's is a Mesh.
         */
        get: function () {
            return this._mesh;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Primitive.prototype, "copyOfVertices", {
        /**
         * Get a fresh copy of the spheres vertices.
         */
        get: function () {
            return this.vertices.map(function (vertex) {
                return vertex.clone();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Primitive.prototype, "vertices", {
        /**
         * Get reference to the sphere's vertices.
         */
        get: function () {
            return (this._mesh.geometry
                .vertices);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Spawn this primitive.
     */
    Primitive.prototype.spawn = function () {
        //Begin spawn phasor.
        this._spawnPhasor.begin();
        //Set spawn state to spawning.
        this._spawnState = PrimitiveSpawnState.Spawning;
    };
    /**
     * Despawn this primitive.
     */
    Primitive.prototype.despawn = function () {
        //Begin spawn phasor.
        this._spawnPhasor.begin();
        //Set spawn state to despawning.
        this._spawnState = PrimitiveSpawnState.Despawning;
    };
    Object.defineProperty(Primitive.prototype, "spawnState", {
        /**
         * Describes if a primitive is spawned, despawned or
         * in the process of spawning/despawning.
         */
        get: function () {
            return this._spawnState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Primitive.prototype, "spawnPhasor", {
        /**
         * Controls the spawn/despawn animation.
         */
        get: function () {
            return this._spawnPhasor;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update the real-time logistics of this primitive.
     */
    Primitive.prototype.update = function () {
        //Check which spawn state is currently active.
        switch (this._spawnState) {
            //If spawning...
            case PrimitiveSpawnState.Spawning:
                //If hasn't fully spawned yet...
                if (this._spawnPhasor.timePassed <=
                    this._spawnPhasor.cyclePeriod) {
                    //Update mid-way scale.
                    this.threeObject.scale.setScalar(this._spawnPhasor.timePassed /
                        this._spawnPhasor.cyclePeriod);
                }
                //Otherwise...
                else {
                    //Update spawn state to spawned.
                    this._spawnState = PrimitiveSpawnState.Spawned;
                    //Fix scale at one.
                    this.threeObject.scale.setScalar(1.0);
                }
                break;
            //If spawned...
            case PrimitiveSpawnState.Spawned:
                //Do nothing.
                break;
            //If despawning...
            case PrimitiveSpawnState.Despawning:
                //If hasn't fully spawned yet...
                if (this._spawnPhasor.timePassed <=
                    this._spawnPhasor.cyclePeriod) {
                    //Update mid-way scale.
                    this.threeObject.scale.setScalar(1.0 -
                        this._spawnPhasor.timePassed /
                            this._spawnPhasor.cyclePeriod);
                }
                //Otherwise...
                else {
                    //Update spawn state to spawned.
                    this._spawnState = PrimitiveSpawnState.Despawned;
                    //Fix scale at zero.
                    this.threeObject.scale.setScalar(0.0);
                }
                break;
            //If despawned...
            case PrimitiveSpawnState.Despawned:
                //Do nothing...
                break;
        }
    };
    return Primitive;
}(TangibleObject_1.default));
exports.default = Primitive;
