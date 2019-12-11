import * as React from 'react'
import Heading from './Heading';
import Separator from './Separator';
import Details from './Details';

export default class Enquiries extends React.Component {
    render() {
        return <>
            <div className="enquiries row">
                <div className="col text-left">
                    <Heading />
                </div>
            </div>
            <Separator />
            <Details/>
        </>
    }
}