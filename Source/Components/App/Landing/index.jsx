import * as React from 'react'
import SphereAnimation from './SphereAnimation';

export default class Landing extends React.Component {
    render() {
        return (
            <section
                class="landing"
            >
                <div
                    className="canvas-container"
                >
                    <SphereAnimation />
                </div>
            </section>
        )
    }
}