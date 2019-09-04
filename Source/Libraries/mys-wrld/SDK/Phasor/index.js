"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Controls a cyclical phased animation with a sinusoidal wave.
 */
var Phasor = /** @class */ (function () {
    /**
     * Initialise fields.
     */
    function Phasor() {
        this._min = -1.0;
        this._max = 1.0;
        this._cyclePeriod = 1.0;
        this._animationBegan = null;
        this._initialPhase = 0.0;
        this._animationRolling = false;
    }
    Object.defineProperty(Phasor.prototype, "min", {
        get: function () {
            return this._min;
        },
        /**
         * The smallest y-value that occurs on the wave.
         */
        set: function (value) {
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "max", {
        get: function () {
            return this._max;
        },
        /**
         * The highest y-value that occurs on the wave.
         */
        set: function (value) {
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "cyclePeriod", {
        get: function () {
            return this._cyclePeriod;
        },
        /**
         * The number of seconds it takes for the phasor to go
         * through a complete wave cycle.
         */
        set: function (value) {
            this._cyclePeriod = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "animationBegan", {
        /**
         * The time at which the phasor animation last began.
         * (Seconds)
         */
        get: function () {
            return this._animationBegan;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "initialPhase", {
        /**
         * The phase that the wave began in at the start of
         * the current animation.
         * (Radians)
         */
        get: function () {
            return this._initialPhase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "amplitude", {
        /**
         * Calculated amplitude of the wave.
         */
        get: function () {
            return (this._max - this._min) / 2.0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "equilibrium", {
        /**
         * Calculation of the stretch cycle wave's equilibrium
         * (zero-point).
         */
        get: function () {
            return (this._max + this._min) / 2.0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phasor.prototype, "timePassed", {
        /**
         * Calculation of the time passed since the current animation
         * began.
         */
        get: function () {
            return (Date.now() / 1000.0) - this._animationBegan;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calculates current phase (in radians) of the animation
     * described based on a given time passed since
     * the start.
     * @param initialPhase The phase that the animation
     *  cycle started in (Radians).
     * @param timePassed The time passed since the start of the
     *  animation (Seconds).
     * @param cyclePeriod The time period of a whole cycle in the
     *  animation (Seconds).
     * @return The phase that the described cycle wave
     *  is currently in.
     */
    Phasor.prototype.calculatePhase = function (initialPhase, timePassed, cyclePeriod) {
        return (initialPhase +
            2 * Math.PI * (timePassed / cyclePeriod));
    };
    Object.defineProperty(Phasor.prototype, "phase", {
        /**
         * Calculated value of what phase the animation cycle is
         * currently in (radians) based on the time passed since
         * the start of the animation.
         */
        get: function () {
            //If not rolling, phase is equivalent to initial phase.
            return this._animationRolling ? this.calculatePhase(this._initialPhase, this.timePassed, this._cyclePeriod) : this._initialPhase;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calculates the current y-value on the wave described.
     * @param amplitude The amplitude of the wave.
     * @param phase The phase that the wave cycle is currently in.
     * @param equilibrium The centre point of the stretch cycle wave
     *  on the y-axis.
     * @return The current y-value on the wave described.
     */
    Phasor.prototype.calculateY = function (amplitude, phase, equilibrium) {
        return (amplitude * Math.sin(phase) + equilibrium);
    };
    Object.defineProperty(Phasor.prototype, "yValue", {
        /**
         * Calculation of the current y-value of the wave.
         */
        get: function () {
            return this.calculateY(this.amplitude, this.phase, this.equilibrium);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Start the animation cycle.
     */
    Phasor.prototype.begin = function (initialPhase) {
        if (initialPhase === void 0) { initialPhase = this._initialPhase; }
        this._initialPhase = initialPhase;
        this._animationBegan = Date.now() / 1000;
        this._animationRolling = true;
    };
    /**
     * End the animation cycle.
     */
    Phasor.prototype.end = function () {
        this._initialPhase = this.phase;
        this._animationRolling = false;
    };
    Object.defineProperty(Phasor.prototype, "isRolling", {
        /**
         * True if the animation cycle is currently rolling.
         * False if not, which means phase is not changing.
         */
        get: function () {
            return this._animationRolling;
        },
        enumerable: true,
        configurable: true
    });
    return Phasor;
}());
exports.default = Phasor;
