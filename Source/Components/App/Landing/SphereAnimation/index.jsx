import * as React from 'react'
import {default as Model} from './model'
import LandingAnimation from '../LandingAnimation'

export default class SphereAnimation extends React.Component {
    constructor() {
        super()
        this.model = new Model()

    }
    
    render() {
        return (
            <LandingAnimation
                model={this.model}
            />
        )
    }
}