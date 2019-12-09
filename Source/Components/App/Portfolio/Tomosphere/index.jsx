import * as React from 'react'

export default class Tomosphere extends React.Component {
    constructor() {
        super()
        this.state = {
            hover: false,
            fastTransition: false
        }
    }

    componentDidUpdate() {
        if (this.props.shown && this.state.fastTransition !== true) {
            setTimeout(()=>{
                this.setState({ fastTransition: true })
            }, 333)
        }
    }

    get transition() {
        return this.state.fastTransition ? 
            "transform 0.33s ease" : 
            "transform 0.66s ease, opacity 0.44s ease"
    }

    get transform() {
        if (this.state.hover)
            return "scale(0.70)"
        else
            return this.props.shown ? "scale(0.66)" : "scale(0.22)"
    }

    get opacity() {
        return this.props.shown ? 1.0 : 0.0
    }

    render() {
        return (
            <a
                className="tomosphere"
                onMouseEnter={()=>{
                    this.setState({ hover: true })
                }}
                onMouseLeave={()=>{
                    this.setState({ hover: false })
                }}
                href="https://tomosphere.herokuapp.com/"
                target="_blank"
            >
                <div
                    className="text"
                    style={{
                        transition: this.transition,
                        opacity: this.opacity,
                        transform: this.transform
                    }}
                >
                    <p className="p1">
                        tomosphere
                    </p>
                    <p className="p2">
                        [Demo Site, 2018]
                    </p>
                </div>
            </a>
        )
    }
}