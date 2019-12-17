import * as React from 'react'
import './styles.css'

//Props:
// - Min Scroll (px)
export default class PlatformLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: "auto",
            opacity: 0.0
        }
        this.ref = React.createRef()
    }

    componentDidMount() {
        this.autoHeight = this.ref.current.clientHeight + "px"
        this.setState({
            height: "0px",
            opacity: 1.0
        })
    }

    componentDidUpdate() {
        if (this.state.height === "0px") {
            setTimeout(() => {
                this.setState({
                    height: this.autoHeight
                })
            }, 1333)
        }
    }

    render() {
        return (
            <div
                className="platform-links"
                style={{
                    height: "calc(" + this.autoHeight + " + 12pt)"
                }}
            >
                <div
                    ref={this.ref}
                    className="platform-links__links"
                    style={{
                        height: this.state.height,
                        opacity: this.state.opacity
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}