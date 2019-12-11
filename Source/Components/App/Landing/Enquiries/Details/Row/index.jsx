import * as React from 'react'

export default class Row extends React.Component {
    constructor() {
        super()
        this.state = {
            hovering: false
        }
    }

    get elementTag() {
        return (this.props.href === "") ? "div" : "a"
    }

    get elementProps() {
        return {
            className: "row enquiries__row",
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
            },
            href: (this.props.href !== "") ?
                this.props.href : undefined,
            target: (this.props.href !== "") ?
                "_blank" : undefined
        }
    }

    get iconElement() {
        return React.cloneElement(
            this.props.icon, {
                className: "equiries__icon"
            }
        )
    }

    get elementContents() {
        return <>
            <div className="col-3 enquires__icon-col">
                {this.iconElement}
            </div>
            <div className="col-9 enquires__text-col">
                {this.props.children}
            </div>
        </>
    }

    render() {
        return React.createElement(
            this.elementTag,
            this.elementProps,
            this.elementContents
        )
    }
}
Row.defaultProps = {
    href: "",
    externalImg: false
}