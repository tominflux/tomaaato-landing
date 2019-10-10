import * as THREE from 'three'
import Primitive from '../../../../Libraries/mys-wrld/SDK/Primitives/Primitive';
import Stretch from '../../../../Libraries/mys-wrld/SDK/Primitives/Sphere/Stretch'

export default class RainDrop extends Primitive {
    constructor(
        lifespan,
        displacement        
    ) {
        super(
            new THREE.Color(0xffffff),
            new THREE.SphereGeometry(
                1.0, 6, 8
            ),
            true,
            true
        )
        console.log(this.threeObject.position)
        this.threeObject.up = new THREE.Vector3(0, -1, 0)
        this.threeObject.lookAt(
            new THREE.Vector3(
                displacement.x,
                displacement.y,
                0
            )
        )
        this.stretch = new Stretch(this)
        this.stretch.phasor.cyclePeriod = lifespan
    }

    get radius() {
        return 1.0 
    }

    update() {
        super.update()
        this.stretch.update()
    }
}