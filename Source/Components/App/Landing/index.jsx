import * as React from 'react'
import SphereAnimation from './SphereAnimation';
import Details from './Details';
import RainDrops from './RainDrops';
import Title from './Title';
import TorusAnimation from './TorusAnimation';

export default class Landing extends React.Component {
    constructor() {
        super()
        this.state = {
            showSphere: false
        }
    }

    componentDidUpdate() {
        document.body.style.backgroundColor = (
            this.state.showSphere ?
                "#160505" : "#060516"
        )
    }

    render() {
        return (
            <section
                className="landing"
            >
                {/*<GlowSpots />*/}
                {/*<RainDrops />*/}
                <Title />
                <div className="row align-items-center">
                    <div 
                        className="col-lg-6"
                        onClick={()=>{
                            this.setState({
                                showSphere: !this.state.showSphere
                            })
                        }}
                    >
                        {(
                            this.state.showSphere ?
                                <SphereAnimation /> :
                                <TorusAnimation />
                        )}
                    </div>
                    <div className="col-lg-6 text-left">
                        <Details />
                    </div>
                </div>
            </section>
        )
    }
}