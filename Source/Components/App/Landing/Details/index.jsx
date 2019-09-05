import * as React from 'react'
import Octicon, {Person, Mention, MarkGithub} from '@primer/octicons-react'
import Row from './Row';

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
                <Row
                    icon={<Octicon icon={Person} size={36}/>}
                >
                    Tom Chesters
                </Row>
                <Row
                    href="mailto:tom@tomaaato.xyz"
                    icon={<Octicon icon={Mention} size={36}/>}
                >
                    tom@tomaaato.xyz
                </Row>
                <Row
                    href="https://github.com/MakingUtopia/"
                    icon={<Octicon icon={MarkGithub} size={36}/>}
                >
                    @MakingUtopia
                </Row>
                <Row
                    href="https://www.linkedin.com/in/tomaaatoxyz/"
                    icon={
                        <img 
                            src="/imgs/linkedin.png"
                            alt="LinkedIn icon."
                        />
                    }
                    externalImg
                >
                    /tomaaatoxyz
                </Row>
                <Row
                    href="https://instagram.com/tomaaato_xyz/"
                    icon={
                        <img 
                            src="/imgs/instagram.svg"
                            alt="Instagram icon."
                        />
                    }
                    externalImg
                >
                    @tomaaato_xyz
                </Row>
            </div>
        )
    }
}