import * as React from 'react'

export default class Heading extends React.Component {
    constructor() {
        super()
        this.state = {
            displayText: "" 
        }
        this.fullText = "Enquiries..."
        this.typePeriod = 66
    }

    componentDidMount() {
        this.showLetterHandle = setTimeout(()=>{
            this.showLetter()
        }, this.typePeriod)
    }

    componentWillUnmount() {
        clearTimeout(this.showLetterHandle)
    }

    showLetter() {
        let currentLength = this.state.displayText.length
        if (currentLength === this.fullText.length)
            return
        else {
            this.setState({
                displayText: this.fullText.substr(0,
                    currentLength + 1
                )
            })
            this.showLetterHandle = setTimeout(()=>{
                this.showLetter()
            }, this.typePeriod)
        }
    }

    render() {
        return (
            <h2>
                {this.state.displayText}
            </h2>
        )
    }
}