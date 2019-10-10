import * as THREE from 'three'
import Animation from '../../Models/Animation'
import RainDrop from './Models/RainDrop'
import Sphere from '../../Libraries/mys-wrld/SDK/Primitives/Sphere'

export default class RainDropAnimation extends Animation {
    constructor(
        lifespan,
        displacement
    ) {
        super()
        this.rainDrop = new RainDrop(
            lifespan, displacement
        )
        this.rainDrop.stretch.phasor.begin()
        this.scene.add(
            this.rainDrop.threeObject
        )
        let pointLight = new THREE.PointLight(0xffffff, 0.33)
        pointLight.position.set(-10.0, 10.0, 25.0)
        this.scene.add(pointLight)
    }

    animate() {
        this.rainDrop.update()
        return super.animate()
    }
}