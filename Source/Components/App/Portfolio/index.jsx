import * as React from 'react'
import WishArt from './WishArt'
import Spacers from './Spacers'

export default class Portfolio extends React.Component {
    constructor() {
        super()
        this.state = {
            scrolled: false,
            shown: false
        }
    }

    componentDidMount() {
        this.scrollHandle = ()=>{ this.onScroll() }
        window.addEventListener("scroll", this.scrollHandle)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll" , this.scrollHandle)
    }

    onScroll() {
        if (window.scrollY > 0.33 * window.innerHeight) {
            this.setState({ scrolled: true })
            setTimeout(()=>{
                this.setState({ shown: true })
            }, 666)
        }
    }

    get opacity() {
        return this.state.scrolled ? 1.0 : 0.11
    }

    render() {
        return (
            <section
                className="portfolio"
            >
                <div 
                    className="content"
                    style={{ opacity: this.opacity }}
                >
                    <h2>
                        Portfolio
                    </h2>
                    <Spacers />
                    <WishArt shown={this.state.shown}/>
                </div>
            </section>
        )
    }
}