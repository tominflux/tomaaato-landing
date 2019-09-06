import * as React from 'react'
import WishArt from './WishArt'

export default class Portfolio extends React.Component {
    render() {
        return (
            <section
                className="portfolio"
            >
                <h2>
                    Portfolio
                </h2>
                <WishArt />
            </section>
        )
    }
}