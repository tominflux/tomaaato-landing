import * as React from 'react'
import './styles.css'

export default class Personal extends React.Component {
    render() {
        return (
            <section
                className="personal"
            >
                <div 
                    className="peronsal__row row align-items-center"
                >
                    <div className="peronsal__left-col col-lg-6">
                        Left (Personal platform links)
                    </div>
                    <div className="personal__right-col col-lg-6">
                        Right
                        (Graphic, link to GitHub Repo)
                    </div>
                </div>
            </section>
        )
    }
}