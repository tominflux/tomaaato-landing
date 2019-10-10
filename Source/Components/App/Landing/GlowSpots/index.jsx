import * as React from 'react'
import GlowSpot from '../../../GlowSpot'


export default class GlowSpots extends React.Component {
    render() {
        return (
            <div
                className="glow-spots"
            >
                <span
                    style={{
                        position: "absolute",
                        left: "20vw",
                        top: "20vh"
                    }}
                >
                    <GlowSpot />
                </span>
                <span
                    style={{
                        position: "absolute",
                        left: "60vw",
                        top: "40vh"
                    }}
                >
                    <GlowSpot radius={200}/>
                </span>
            </div>
        )
    }
}