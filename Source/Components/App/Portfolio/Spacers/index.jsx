import * as React from 'react'
import './styles.css'

export default class Spacers extends React.Component {
    render() {
        return (
            <>
                <div className="portfolio__spacer-horizontal"/>
                <div className="portfolio__spacer-vertical"/>
            </>
        )
    }
}