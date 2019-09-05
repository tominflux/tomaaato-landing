import * as React from 'react'

export default class Glow extends React.Component {
    constructor() {
        super()
        this.state = {
            dimensions: {
                width: 0, height: 0
            }
        }
        this.ref = React.createRef()
    }

    componentDidMount() {
        this.resizeHandle = requestAnimationFrame(()=>{
            this.checkResize()
        })
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.resizeHandle)
    }

    get parentElement() {
        return this.ref.current.parentElement
    }

    checkResize() { 
        let parentElement = this.parentElement
        let width = parentElement.clientWidth
        let height = parentElement.clientHeight
        if (
            width !== this.state.dimensions.width ||
            height !== this.state.dimensions.height
        ) {
            this.setState({
                dimensions: {
                    width: width, height: height
                }
            })
        }
        this.resizeHandle = requestAnimationFrame(()=>{
            this.checkResize()
        })
    }

    render() {
        return (
            <svg
                ref={this.ref}
                style={{
                    position: "absolute",
                    width: this.state.dimensions.width,
                    height: this.state.dimensions.height
                }}
            >
                <rect 
                    width={this.state.dimensions.width}
                    height={this.state.dimensions.height}
                    style={{
                        fill: "white"
                    }}
                />
            </svg>
        )
    }
}

