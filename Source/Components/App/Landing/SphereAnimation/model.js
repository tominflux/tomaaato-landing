import * as THREE from 'three'
import Animation from '../../../../Models/Animation'
import DualSphere from '../../../../Libraries/mys-wrld/SDK/Primitives/DualSphere'
import Phasor from '../../../../Libraries/mys-wrld/SDK/Phasor'

export default class SphereAnimationModel extends Animation {
    constructor() {
        super()
        this.dualSphere = new DualSphere(1.33)
        this.dualSphere.maxStretch = 2.0
        this.dualSphere.minStretch = 0.0
        this.dualSphere.beginAnimation()
        this.dualSphere.material 
            = new THREE.MeshBasicMaterial({ 
                color: 0xffffff, 
                wireframe: true
            })
        this.scene.add(
            this.dualSphere.threeObject
        )
        this.dualSphere.threeObject.rotateOnWorldAxis(
            new THREE.Vector3(
                0, 0, 1
            ), 90
        )
        this.phasor = new Phasor()
        this.phasor.begin()
        this.phasor.cyclePeriod = 40
        let pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.set(0.0, 20, 0.0)
        this.scene.add(pointLight)
    }

    animate() {
        this.dualSphere.threeObject.setRotationFromAxisAngle(
            new THREE.Vector3(0, 0, 1.0),
            -this.phasor.phase
        )
        this.dualSphere.update()
        return super.animate()
    }
}