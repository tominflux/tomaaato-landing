import * as React from 'react'
import Octicon, {Person, Mention, MarkGithub} from '@primer/octicons-react'

export default class Details extends React.Component {
    render() {
        return (
            <div className="details">
                <div className="row">
                    <div className="col text-left">
                        <h3>
                            Enquiries...
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Octicon icon={Person} size={36}/>
                    </div>
                    <div className="col-9">

                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Octicon icon={Mention} size={36}/>
                    </div>
                    <div className="col-9">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Octicon icon={MarkGithub} size={36}/>
                    </div>
                    <div className="col-9">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img 
                            src="/imgs/instagram.svg"
                            alt="Instagram icon."
                        />
                    </div>
                    <div className="col-9">
                        
                    </div>
                </div>
            </div>
        )
    }
}