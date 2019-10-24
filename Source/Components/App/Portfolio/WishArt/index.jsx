import * as React from 'react'

export default class WishArt extends React.Component {
    constructor() {
        super()
        this.state = {
            hover: false,
            fastTransition: false
        }
    }

    componentDidUpdate() {
        if (this.props.shown && this.state.fastTransition !== true) {
            setTimeout(()=>{
                this.setState({ fastTransition: true })
            }, 333)
        }
    }

    get transition() {
        return this.state.fastTransition ? 
            "transform 0.33s ease" : 
            "transform 1.33s ease, opacity 0.44s ease"
    }

    get transform() {
        if (this.state.hover)
            return "scale(0.70)"
        else
            return this.props.shown ? "scale(0.66)" : "scale(0.22)"
    }

    get opacity() {
        return this.props.shown ? 1.0 : 0.0
    }

    render() {
        return (
            <a 
                className="wishart"
                onMouseEnter={()=>{
                    this.setState({ hover: true })
                }}
                onMouseLeave={()=>{
                    this.setState({ hover: false })
                }}
                href="http://wish-art-films.com/"
                target="_blank"
            >
                <div 
                    className="banner row text-center"
                    style={{
                        transition: this.transition,
                        opacity: this.opacity,
                        transform: this.transform
                    }}
                >
                    <div className="col-3 left">
                        <div className="noise"/>
                    </div>
                    <div className="col-6">
                        <div
                            className="logo"
                        >
                            <img
                                src="/imgs/wishart.svg"
                                alt="Logo reading 'Wish/Art'"
                            />
                            <p>
                                <i>
                                    films
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="col-3 right">
                        <div className="noise"/>
                    </div>
                </div>
            </a>
        )
    }
}