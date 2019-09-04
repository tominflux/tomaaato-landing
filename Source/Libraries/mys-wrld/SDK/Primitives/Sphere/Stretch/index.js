"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phasor_1 = require("../../../Phasor");
/**
 * Stretch animation controller for spheres.
 * Performs stretch/squash animation cycle.
 */
var Stretch = /** @class */ (function () {
    /**
     * Initialise stretch animation fields.
     * Records a copy of the sphere's original unstretched vertices.
     * @param sphere
     */
    function Stretch(sphere) {
        this._sphere = sphere;
        this._originalVertices = this.copyOfVertices;
        this._phasor = new Phasor_1.default();
        this._phasor.max = 4.0;
        this._phasor.min = 0.33;
        this._phasor.cyclePeriod = 12.0;
    }
    Object.defineProperty(Stretch.prototype, "sphere", {
        /**
         * Reference to the sphere that this stretch animation
         * applies to.
         */
        get: function () {
            return this._sphere;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stretch.prototype, "copyOfVertices", {
        /**
         * Get a fresh copy of the spheres vertices.
         */
        get: function () {
            return this._sphere.copyOfVertices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stretch.prototype, "vertices", {
        /**
         * Get reference to the sphere's vertices.
         */
        get: function () {
            return this._sphere.vertices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stretch.prototype, "lowestPoint", {
        /**
         * The position on the y-axis with the smallest value
         * that sits within this sphere.
         */
        get: function () {
            return (this._sphere.position.y - this._sphere.radius);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stretch.prototype, "originalVertices", {
        /**
         * Reference to the recorded vertices of the sphere in its
         * original unstretched state.
         */
        get: function () {
            return this._originalVertices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stretch.prototype, "phasor", {
        /**
         * The phasor that controls this sphere's animation cycle.
         */
        get: function () {
            return this._phasor;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Perform a stretch on a single vertex.
     * @param displacedVertex The vertex to perform a stretch on
     *  (adjust it's y-value).
     * @param originalVertex A copy of the vertex that represents
     *  its original un-stretched state.
     * @param radius The radius of the sphere.
     * @param squashStretchFactor The factor the vertex is to be
     *  squashed or stretched by.
     */
    Stretch.prototype.stretchVertex = function (displacedVertex, originalVertex, radius, squashStretchFactor) {
        //Original vertex x-value
        var xA = originalVertex.x;
        //Original vertex y-value
        var yA = originalVertex.y;
        //Original vertex z-value
        var zA = originalVertex.z;
        //Radius
        var r = radius;
        //Calculate original vertex's distance from
        //y-axis.
        var d = Math.sqrt(Math.pow(xA, 2) + Math.pow(zA, 2));
        //Calculate displacement proportion
        var dp = r - Math.sqrt(2 * r * d - Math.pow(d, 2));
        //Get squash/stretch factor
        var ssf = squashStretchFactor;
        //If stretching...
        if (Math.abs(ssf) > 1.0) {
            //Calculate stretch factor
            var sf = Math.abs(ssf) > 1.0 ?
                ssf - ssf / Math.abs(ssf) : 0.0;
            //Calculate displaced vertex y-value displacement.
            var dy = dp * sf;
            //Calculate displaced vertex y-value
            var yC = yA + dy;
            if (Math.abs(yC) < Math.abs(yA))
                yC = yA;
            //Apply displaced vertex y-value
            displacedVertex.y = yC;
        }
        //If squashing... 
        else {
            //Calculate squash factor
            var sf = -Math.abs(ssf - ssf / Math.abs(ssf));
            //Calculate displaced vertex y-value displacement.
            var dy = (yA > 0.0) ?
                dp * sf :
                -dp * sf;
            //Calculate displaced vertex y-value
            var yC = yA + dy;
            //Apply displaced vertex y-value
            displacedVertex.y = yC;
        }
    };
    /**
     * Perform a stretch on all the sphere's vertices.
     * @param vertices Reference to the vertices belonging the sphere
     *  to perform a stretch on.
     * @param originalVertices Reference of the sphere's original
     *  un-stretched vertices.
     * @param radius The radius of the sphere
     * @param squashStretchFactor The factor the vertex is to be
     *  squashed/stretched by.
     */
    Stretch.prototype.stretchVertices = function (vertices, originalVertices, radius, squashStretchFactor) {
        //Loop through sphere vertices.
        for (var i = 0, limit = vertices.length; i < limit; i++) {
            this.stretchVertex(vertices[i], originalVertices[i], radius, squashStretchFactor);
        }
        //Inform geometry needs updating
        this._sphere.threeObject.geometry
            .verticesNeedUpdate = true;
        this._sphere.threeObject.geometry
            .computeVertexNormals();
    };
    Object.defineProperty(Stretch.prototype, "squashStretchFactor", {
        /**
         * The factor that this sphere is currently being stretched by.
         * >1.0 -> Stretching
         * =1.0 -> Normal
         * <1.0 -> Squashing
         */
        get: function () {
            return this._phasor.yValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update the stretch/squash animation cycle.
     */
    Stretch.prototype.update = function () {
        if (this._phasor.isRolling) {
            this.stretchVertices(this.vertices, this._originalVertices, this._sphere.radius, this.squashStretchFactor);
        }
    };
    return Stretch;
}());
exports.default = Stretch;
