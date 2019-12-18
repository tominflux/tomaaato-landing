import * as React from 'react'
import Links from './Links'
import './styles.css'

export default class Personal extends React.Component {
    render() {
        return (
            <section
                className="personal"
            >
                <div 
                    className="personal__row row align-items-center"
                >
                    <div className="personal__left-col col-lg-7">
                        <h2 className="personal__heading">
                            Other Platforms
                        </h2>
                        <Links />
                    </div>
                    <div className="personal__right-col col-lg-5">
                        {/* Graphics */}
                    </div>
                </div>
            </section>
        )
    }
}