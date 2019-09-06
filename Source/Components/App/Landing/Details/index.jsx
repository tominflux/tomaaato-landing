import * as React from 'react'
import Octicon, {Person, Mention, MarkGithub} from '@primer/octicons-react'
import Row from './Row';

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            height: "auto",
            opacity: 0.0
        }
        this.ref = React.createRef()
        this.autoHeight = "auto"
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
        return <>
            <div className="row enquiries">
                <div className="col text-left">
                    <h2>
                        Enquiries...
                    </h2>
                </div>
            </div>
            <div
                style={{
                    display: "inline-block",
                    width: "100%",
                    height: "calc(" + this.autoHeight + " + 12pt)"
                }}
            >
                <div 
                    ref={this.ref}
                    className="details"
                    style={{
                        display: "inline-block",
                        overflow: "hidden",
                        transition: "height 1.33s ease",
                        width: "66%",
                        height: this.state.height,
                        opacity: this.state.opacity
                    }}
                >
                    <Row
                        icon={<Octicon icon={Person} size={36}/>}
                    >
                        Tom Chesters
                    </Row>
                    <Row
                        href="mailto:tom@tomaaato.xyz"
                        icon={<Octicon icon={Mention} size={36}/>}
                    >
                        tom@tomaaato.xyz
                    </Row>
                    <Row
                        href="https://github.com/MakingUtopia/"
                        icon={<Octicon icon={MarkGithub} size={36}/>}
                    >
                        @MakingUtopia
                    </Row>
                    <Row
                        href="https://www.linkedin.com/in/tomaaatoxyz/"
                        icon={
                            <img 
                                src="/imgs/linkedin.png"
                                alt="LinkedIn icon."
                            />
                        }
                        externalImg
                    >
                        /tomaaatoxyz
                    </Row>
                    <Row
                        href="https://instagram.com/tomaaato_xyz/"
                        icon={
                            <img 
                                src="/imgs/instagram.svg"
                                alt="Instagram icon."
                            />
                        }
                        externalImg
                    >
                        @tomaaato_xyz
                    </Row>
                </div>
            </div>
        </>
    }
}