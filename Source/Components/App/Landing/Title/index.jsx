import * as React from 'react'

export default class Title extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollTop: true,
            hovering: false
        }
    }

    componentDidMount() {
        this.scrollHandle = () => { this.checkScroll() }
        window.addEventListener("scroll", this.scrollHandle)
    }

    componentWillUnmount() {
        window.removeEventListener(
            "scroll", this.scrollHandle
        )
    }

    checkScroll() {
        let doc = document.documentElement
        let top = (window.pageYOffset || doc.scrollTop)  
            - (doc.clientTop || 0)
        this.setState({ scrollTop: (top < 180) })
    }

    get litUp() {
        return (
            this.state.scrollTop || this.state.hovering
        )
    }

    render() {
        return (
            <>
                <h1
                    style={{
                        opacity: (this.litUp ? 
                            "inherit" : 0.22)
                    }}
                    onMouseEnter={()=>{
                        this.setState({ hovering: true })
                    }}
                    onMouseLeave={()=>{
                        this.setState({ hovering: false })
                    }}
                >
                    tomaaato.xyz - Coming Soon
                </h1>
                <div
                    className="title-placeholder"
                />
            </>
        )
    }
}