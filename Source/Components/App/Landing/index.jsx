import * as React from 'react'
import SphereAnimation from './SphereAnimation';
import Enquiries from './Enquiries';
import Header from './Header';
import TorusAnimation from './TorusAnimation';
import './styles.css';

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
                <Header />
                <div className="landing__row row align-items-center">
                    <div 
                        className="landing__animation-col col-lg-6"
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
                    <div 
                        className="landing__enquiries-col col-lg-6 text-left"
                    >
                        <Enquiries />
                    </div>
                </div>
            </section>
        )
    }
}