import * as React from 'react'

class Root {
    render() {
        return React.createElement(

        )
    }
}

export default class Row extends React.Component {
    constructor() {
        super()
        this.state = {
            hovering: false
        }
    }

    render() {
        let props = {
            className: "row",
            onMouseEnter: ()=>{
                this.setState({hovering: true})
            },
            onMouseLeave: ()=>{
                this.setState({hovering: false})
            },
            style: {
                backgroundColor: this.state.hovering ?
                    "#fff" : "transparent",
                color: this.state.hovering ? 
                    "#060516" : "inherit"
            }
        }
        if (this.props.href !== "") {
            props.href = this.props.href
            props.target = "_blank"
        }
        let children = (
            <>
                <div className="col-3">
                    {
                        (
                            this.props.externalImg && 
                            this.state.hovering
                        ) ?
                            React.cloneElement(
                                this.props.icon, {
                                    style: {
                                        filter: "invert(100%)"
                                    }
                                }
                            ) : this.props.icon
                    }
                </div>
                <div className="col-9">
                    {this.props.children}
                </div>
            </>
        )
        return React.createElement(
            (this.props.href === "") ? "div" : "a",
            props,
            children
        )
    }
}
Row.defaultProps = {
    href: "",
    externalImg: false
}