import * as React from 'react'
import Landing from './Landing'
import Portfolio from './Portfolio'
import "./styles.css"

export default class App extends React.Component {
    render() {
        return <>
            <Landing />
            <Portfolio />
        </>
    }
}