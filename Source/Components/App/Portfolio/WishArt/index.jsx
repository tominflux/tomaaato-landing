import * as React from 'react'

export default class WishArt extends React.Component {
    render() {
        return (
            <div className="wishart">
                <div className="banner row text-center">
                    <div className="col-3 left">
                        <div className="noise"/>
                    </div>
                    <div className="col-6">
                        <div
                            className="logo"
                        >
                            <img
                                src="/imgs/wishart.svg"
                                alt="Logo reading 'Wish/Art'"
                            />
                            <p>
                                <i>
                                    films
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="col-3 right">
                        <div className="noise"/>
                    </div>
                </div>
            </div>
        )
    }
}