import * as React from 'react'
import SphereAnimation from './SphereAnimation';
import Details from './Details';
import RainDrops from './RainDrops';

export default class Landing extends React.Component {
    render() {
        return (
            <section
                className="landing"
            >
                {/*<GlowSpots />*/}
                {/*<RainDrops />*/}
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <SphereAnimation />
                    </div>
                    <div className="col-lg-6 text-left">
                        <Details />
                    </div>
                </div>
            </section>
        )
    }
}