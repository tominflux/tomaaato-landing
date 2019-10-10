import * as React from 'react'
import WishArt from './WishArt'
import Spacers from './Spacers'

export default class Portfolio extends React.Component {
    render() {
        return (
            <section
                className="portfolio"
            >
                <h2>
                    Portfolio
                </h2>
                <Spacers />
                <WishArt />
            </section>
        )
    }
}