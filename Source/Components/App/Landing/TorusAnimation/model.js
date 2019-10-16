import * as THREE from 'three'
import Animation from '../../../../Models/Animation'
import Phasor from '../../../../Libraries/mys-wrld/SDK/Phasor'
import Torus from '../../../../Models/Torus'

export default class TorusAnimationModel extends Animation {
    constructor() {
        super()
        this.torus = new Torus(this.scene)
        this.scene.add(
            this.torus.threeObject
        )
        this.torus.initialiseTrail()
        this.phasor = new Phasor()
        this.phasor.begin()
        this.phasor.cyclePeriod = 40
        let pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.set(0.0, 20, 0.0)
        this.scene.add(pointLight)
    }

    animate() {
        this.torus.threeObject.setRotationFromAxisAngle(
            new THREE.Vector3(0, 1.0, 1.0),
            -this.phasor.phase
        )
        this.torus.update()
        return super.animate()
    }
}