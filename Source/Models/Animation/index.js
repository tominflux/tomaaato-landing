import * as THREE from 'three'

export default class Animation {
    constructor() {
        this.renderer = null
        this.animateHandle = null
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera()
        this.camera.position.set(
            0, 0, 8.8
        )
        this.camera.lookAt(new THREE.Vector3(
            0, 0, 0
        ))
        this.canvasWidth = 640
        this.canvasHeight = 480
    }


    /**
     * Tells the animatuon that the HTMLCanvasElement
     * has loaded onto the DOM and is ready.
     */
    onViewReady(canvasElement) {
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasElement,
            alpha: true
        })
        this.renderer.setSize(
            canvasElement.parentElement.clientWidth,
            canvasElement.parentElement.clientHeight
        )
        this.renderer.shadowMapEnabled = true
        this.renderer.shadowMapType = THREE.PCFSoftShadowMap
        this.renderer.setClearColor( 
            0x000000, 0
        )
    }


    /**
     * To be called on every animation frame.
     * Count another frame for the current second and decide whether
     * to progress on to the next second and update the most recent
     * FPS count.
     */
    countFPS() {
        this.frameCount ++
        if (Date.now() - this.timestamp >= 1000) {
            this.fps = this.frameCount
            this.frameCount = 0
            this.timestamp = Date.now()
        }
    }

    adjustAspectRatio() {
        let canvas = this.renderer.getContext().canvas
        let canvasParent = canvas.parentElement
        let newWidth = canvasParent.clientWidth
        let newHeight = canvasParent.clientHeight
        if (
            newWidth !== this.canvasWidth ||
            newHeight !== this.canvasHeight
        ) {
            this.camera.aspect = newWidth / newHeight
            this.renderer.setSize(
                newWidth, newHeight
            )
            this.canvasWidth = newWidth
            this.canvasHeight = newHeight
        }
    }


    /**
     * Processes & renders single frame of the 
     * animation.
     * @returns True if animates successfully. 
     */
    animate() {
        this.countFPS()
        this.adjustAspectRatio()
        this.animateHandle =
            requestAnimationFrame(()=>{
                this.animate()
            })
        if (this.renderer === null)
            return false
        this.renderer.render(
            this.scene, this.camera
        )
        return true
    }

    /**
     * Begin animation cycle.
     */
    start() {
        this.frameCount = 0
        this.fps = 60
        this.timestamp = Date.now()
        return this.animate()
    }

    /**
     * End animation cycle.
     */
    end() {
        cancelAnimationFrame(
            this.animateHandle
        )
    }
}