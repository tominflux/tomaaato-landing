import * as React from 'react'

/**
 * Props:
 *  - model: AnimationModel
 */
export default class LandingAnimation extends React.Component {
    constructor() {
        super()
        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        this.props.model.onViewReady(this.canvasRef.current)
        this.props.model.start()
    }

    componentWillUnmount() {
        this.props.model.end()
    }

    render() {
        return (
            <div className="landing-animation">
                <canvas
                    className=".landing-animation__canvas"
                    ref={this.canvasRef}
                />
            </div>
        )
    }
}