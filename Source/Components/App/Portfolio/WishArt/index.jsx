import * as React from 'react'

export default class WishArt extends React.Component {
    constructor() {
        super()
        this.state = {
            hover: false
        }
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
                        transform: (this.state.hover ? 
                            "scale(0.70)" : "scale(0.66)")
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