import * as React from 'react'
import RainDrop from '../../../RainDrop'

export default class RainDrops extends React.Component {
    constructor() {
        super()
        this.state = {
            positions: []
        }
    }

    render() {
        return (
            <div
                className="raindrops"
            >
                <span
                    style={{
                        position: "absolute",
                        left: "20vw",
                        top: "20vh"
                    }}
                >
                    <RainDrop />
                </span>
            </div>
        )
    }
}