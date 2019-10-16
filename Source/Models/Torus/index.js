import * as THREE from 'three'
import TrailRenderer from '../../Libraries/TrailRenderer'
import Primitive from "../../Libraries/mys-wrld/SDK/Primitives/Primitive";
import Phasor from '../../Libraries/mys-wrld/SDK/Phasor';

export default class Torus extends Primitive {
    constructor(scene) {
        super(
            new THREE.Color(0xff0000),
            new THREE.TorusGeometry(
                1.0, 0.4, 8, 18
            ),
            true,
            true
        )
        this.scene = scene
        this.threeObject.material 
            = new THREE.MeshBasicMaterial({ 
                color: 0xffffff, 
                wireframe: true
            })

        this.phasor1 = new Phasor()
        this.phasor1.begin()
        this.phasor1.cyclePeriod = 20/9
        this.ball1Geometry = new THREE.SphereGeometry(0.1, 8, 6)
        this.ball1 = new THREE.Mesh(
            this.ball1Geometry,
            new THREE.MeshBasicMaterial({
                color: new THREE.Color(0xff8989)
            })
        )
        this.threeObject.add(this.ball1)

        this.phasor2 = new Phasor()
        this.phasor2.begin()
        this.phasor2.cyclePeriod = 30/9
        let ball2Geometry = new THREE.SphereGeometry(0.1, 8, 6)
        this.ball2 = new THREE.Mesh(
            ball2Geometry,
            new THREE.MeshBasicMaterial({
                color: new THREE.Color(0x8989ff)
            })
        )
        this.threeObject.add(this.ball2)
    }

    initialiseTrail() {
        this.trailMaterial1 
            = TrailRenderer.createBaseMaterial()
        this.trailMaterial1.uniforms.headColor.value.set(
            1.0, 0.565, 0.565, 0.66
        )
        this.trailMaterial1.uniforms.tailColor.value.set(
            1.0, 0.565, 0.565, 0.66
        )

        this.trailMaterial2 
            = TrailRenderer.createBaseMaterial()
        this.trailMaterial2.uniforms.headColor.value.set(
            0.565, 0.565, 1.0, 0.66
        )
        this.trailMaterial2.uniforms.tailColor.value.set(
            0.565, 0.565, 1.0, 0.66
        )

        this.trailLength = 32.0
        this.trailGeometry = [];

		var twoPI = Math.PI * 2;
		var scale = 0.1;
		var inc = twoPI / 32.0;
		for ( var i = 0; i <= twoPI + inc; i+= inc )  {
			var vector = new THREE.Vector3()
			vector.set( 
                Math.cos(i) * scale, 
                Math.sin(i) * scale, 
                0 
            )
			this.trailGeometry.push(vector)
        }
        this.trailGeometry = this.ball1Geometry.vertices

        this.trail1 = new TrailRenderer(
            this.scene, true
        )
        this.trail1.initialize(
            this.trailMaterial1, Math.floor(this.trailLength), 
            false, 0.1,
            this.trailGeometry, this.ball1
        )
        this.trail1.activate()


        this.trail2 = new TrailRenderer(
            this.scene, true
        )
        this.trail2.initialize(
            this.trailMaterial2, Math.floor(this.trailLength), 
            false, 0.1,
            this.trailGeometry, this.ball2
        )
        this.trail2.activate()
    }

    update() {
        super.update()
        this.ball1.position.set(
            Math.sin(-this.phasor1.phase) * 1.165,
            Math.cos(-this.phasor1.phase) * 1.165,
            0
        )
        this.ball2.position.set(
            Math.sin(this.phasor2.phase) * 0.835,
            Math.cos(this.phasor2.phase) * 0.835,
            0
        )
        this.trail1.advance()
        this.trail1.updateHead() 
        this.trail2.advance()
        this.trail2.updateHead() 
    }
}