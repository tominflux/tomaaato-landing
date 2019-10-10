import * as React from 'react'
import Octicon, {PrimitiveDot, Dash} from '@primer/octicons-react'

export default class Separator extends React.Component {
    constructor() {
        super()
        this.state = {
            desiredWidth: window.innerWidth * 1.66,
            characterCount: 0,
            missingIndex: 0,
            left: 0
        }
        this.ref = React.createRef()
        this.containerRef = React.createRef()
    }

    componentDidMount() {
        this.resizeHandle = () => {this.onResize()}
        window.addEventListener("resize", this.resizeHandle)
        this.onUpdate()
        this.onResize()
        this.intervalHandle = setInterval(()=>{
            this.setState((state, props) => {
                return {
                    missingIndex: 
                        (state.missingIndex < state.characterCount) ?
                            state.missingIndex + 1 : 0
                }
            })
        }, 150)
    }

    componentDidUpdate() {
        this.onUpdate()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeHandle)
    }

    onResize() {
        let element = this.containerRef.current
        this.setState({
            left: element.getBoundingClientRect().left
        })
        if (window.innerWidth !== this.state.desiredWidth) {
            this.setState({
                desiredWidth: window.innerWidth
            })
        }
    }

    onUpdate() {
        if (this.ref.current.clientWidth < this.state.desiredWidth) {
            this.setState((state, props) => {
                return {
                    characterCount: state.characterCount + 16
                }
            })
        }
    }

    get displayText() {
        let displayText = []
        for (let i=0; i<this.state.characterCount; i++) {
            displayText.push(
                <>
                    {
                        (
                            i >= this.state.missingIndex && 
                            i < this.state.missingIndex + 4 ||
                            i < this.state.missingIndex + 4 -
                                this.state.characterCount
                        ) ? <Octicon icon={Dash} size={16}/> :
                            <Octicon icon={PrimitiveDot} size={16}/> 
                    }
                    &nbsp;&nbsp;&nbsp;
                </>
            )
        }
        return displayText
    }

    render() {
        return (
            <div
                ref={this.containerRef}
                style={{
                    position: "absolute",
                    left: 0,
                    width: "99vw",
                    overflow: "hidden",
                    height: "36pt"
                }}
            >
                <div 
                    ref={this.ref}
                    style={{
                        display: "inline-block",
                        position: "absolute",
                        whiteSpace: "nowrap",
                        opacity: 0.666
                    }}
                >
                    {this.displayText}
                </div>
            </div>
        )
    }
}