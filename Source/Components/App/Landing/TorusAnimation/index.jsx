import * as React from 'react'
import {default as Model} from './model'

export default class TorusAnimation extends React.Component {
    constructor() {
        super()
        this.model = new Model()
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        this.model.onViewReady(this.canvasRef.current)
        this.model.start()
    }

    componentWillUnmount() {
        this.model.end()
    }

    render() {
        return (
            <div className="canvas-container">
                <canvas
                    className="sphere-canvas"
                    ref={this.canvasRef}
                />
            </div>
        )
    }
}