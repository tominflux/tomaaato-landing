import * as React from 'react'
import Banner from './mys-wrld.jpg'
import './styles.css'

export default class MysWrld extends React.Component {
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
                className="mys-wrld"
                onMouseEnter={()=>{
                    this.setState({ hover: true })
                }}
                onMouseLeave={()=>{
                    this.setState({ hover: false })
                }}
                href="https://makingutopia.github.io/mys-wrld-showcase/"
                target="_blank"
            >
                <img
                    className="mys-wrld__image"
                    src={Banner}
                    alt="MysTopia Screenshot"
                    style={{
                        transition: this.transition,
                        opacity: this.opacity,
                        transform: this.transform
                    }}
                />
            </a>
        )
    }
}