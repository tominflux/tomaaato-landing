import * as React from 'react'
import Landing from './Landing'
import Personal from './Personal'
import Portfolio from './Portfolio'
import "./styles.css"

export default class App extends React.Component {
    render() {
        return <>
            <Landing />
            <Personal />
            <Portfolio />
        </>
    }
}