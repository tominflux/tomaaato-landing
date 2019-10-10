import * as React from 'react'

export default class GlowSpot extends React.Component {
    constructor() {
        super()
        this.state = {
            opacity: 0.0
        }
    }

    componentDidMount() {
        this.setState({
            opacity: this.props.minOpacity
        })
        this.intervalHandle = setInterval(()=>{
            this.setState((state, props) => {
                return {
                    opacity: (
                            state.opacity === props.minOpacity
                        ) ? props.maxOpacity : props.minOpacity
                }
            })
        }, this.props.cyclePeriod)
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle)
    }

    render() {
        return (
            <svg
                ref={this.ref}
                style={{
                    position: "absolute",
                    width: this.props.radius * 2,
                    height: this.props.radius * 2,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "opacity " + this.props.cyclePeriod + 
                        "ms ease",
                    opacity: this.state.opacity
                }}
            >
                <defs>
                    <radialGradient 
                        id="grad1" 
                        cx="50%" 
                        cy="50%" 
                        r="50%" 
                        fx="50%"
                        fy="50%"
                    >
                        <stop 
                            offset="0%" 
                            style={{
                                stopColor: "rgb(255,255,255)", 
                                stopOpacity: 1.0
                            }}
                        />
                        <stop 
                            offset="100%" 
                            style={{
                                stopColor: "rgb(255,255,255)",
                                stopOpacity: 0
                            }}
                        />
                    </radialGradient>
                </defs>
                <circle 
                    cx="50%" 
                    cy="50%" 
                    r={this.props.radius}
                    fill="url(#grad1)" 
                />
            </svg>
        )
    }
}

GlowSpot.defaultProps = {
    radius: 100,
    minOpacity: 0.16,
    maxOpacity: 0.33,
    cyclePeriod: 6600
}