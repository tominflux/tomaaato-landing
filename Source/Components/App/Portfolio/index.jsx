import * as React from 'react'
import Spacers from './Spacers'
import WishArt from './WishArt'
import MysWrld from './MysWrld'

export default class Portfolio extends React.Component {
    constructor() {
        super()
        this.state = {
            scrolled: false,
            showWishart: false,
            showMysWrld: false
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
                this.setState({ showWishart: true })
            }, 444)
        }
        if (window.scrollY > 0.44 * window.innerHeight) {
            setTimeout(()=>{
                this.setState({ showMysWrld: true })
            }, 444)
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
                    <WishArt shown={this.state.showWishart}/>
                    <MysWrld shown={this.state.showMysWrld}/>
                </div>
            </section>
        )
    }
}