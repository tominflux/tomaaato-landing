import * as React from 'react'
import {default as Model} from './model'

export default class RainDrop extends React.Component {
    constructor() {
        super()
        this.state = {
            displacement: { x: 0, y: 0 }
        }
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        let displacement = {
            x: -(this.props.distance/2) + Math.random() * this.props.distance,
            y: -(this.props.distance/2) + Math.random() * this.props.distance,
        }
        this.model = new Model(
            this.props.lifespan/1000,
            displacement
        )
        this.model.onViewReady(this.canvasRef.current)
        this.model.start()
        this.setState({
            displacement: displacement
        })
    }

    componentWillUnmount() {
        this.model.end()
    }

    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    display: "inline-block",
                    width: this.props.size,
                    height: this.props.size,
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(" + 
                            "calc(-50% + " + this.state.displacement.x + "px), " +
                            "calc(-50% + " + this.state.displacement.y + "px)" + 
                        ")",
                    transition: "transform " + this.props.lifespan + "ms ease"
                }}
            >
                <canvas
                    class="raindrops-canvas"    
                    ref={this.canvasRef}
                />
            </div>
        )
    }
}

RainDrop.defaultProps = {
    size: "240pt",
    distance: 640,
    lifespan: 900
}