import * as React from 'react'

export default class Title extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollTop: true
        }
    }

    componentDidMount() {
        this.scrollHandle = () => { this.checkScroll() }
        window.addEventListener("scroll", this.scrollHandle)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandle)
    }

    checkScroll() {
        let doc = document.documentElement
        let top = (
            (window.pageYOffset || doc.scrollTop)  
                - (doc.clientTop || 0)
        )
        console.log(top)
        this.setState({
            scrollTop: (top < 180)
        })
    }

    render() {
        return (
            <>
                <h1
                    style={{
                        opacity: (this.state.scrollTop ? 
                            "inherit" : 0.44)
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