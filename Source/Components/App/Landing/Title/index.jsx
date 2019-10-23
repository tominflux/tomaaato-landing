import * as React from 'react'

export default class Title extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollTop: true,
            display: false,
            hovering: false
        }
    }

    componentDidMount() {
        this.scrollHandle = () => { this.checkScroll() }
        window.addEventListener("scroll", this.scrollHandle)
        this.displayHandle = setTimeout(()=>{
            this.setState({ display: true })
        }, 1666)
    }

    componentWillUnmount() {
        window.removeEventListener(
            "scroll", this.scrollHandle
        )
        clearTimeout(this.displayHandle)
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

    get opacity() {
        if (this.state.display === true) 
            return this.litUp ? "inherit" : 0.22
        else 
            return 0.0
    }

    render() {
        return (
            <>
                <h1
                    style={{
                        opacity: this.opacity
                    }}
                    onMouseEnter={()=>{
                        this.setState({ hovering: true })
                    }}
                    onMouseLeave={()=>{
                        this.setState({ hovering: false })
                    }}
                    onClick={()=>{
                        window.scrollTo(0, 0)
                    }}
                >
                    <img
                        src="/imgs/tomaaato-logo-3.svg"
                        alt="tomaaato.xyz logo"
                    />
                    tomaaato.xyz - Coming Soon
                </h1>
                <div
                    className="title-placeholder"
                />
            </>
        )
    }
}