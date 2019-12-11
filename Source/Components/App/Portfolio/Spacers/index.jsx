import * as React from 'react'
import './styles.css'

export default class Spacers extends React.Component {
    render() {
        return (
            <>
                <div className="horizontal-spacer"/>
                <div className="vertical-spacer"/>
            </>
        )
    }
}