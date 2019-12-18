import * as React from 'react'
import Heading from './Heading';
import Separator from './Separator';
import PlatformLinks from '../../PlatformLinks'
import LinkRow from '../../PlatformLinks/LinkRow'
import Octicon, {Person, Mention, MarkGithub} from '@primer/octicons-react'
import linkedinImage from './linkedin.png'
import "./styles.css"

export default class Enquiries extends React.Component {
    render() {
        return <>
            <div className="enquiries row">
                <div className="col text-left">
                    <Heading />
                </div>
            </div>
            <Separator />
            <PlatformLinks>
                <LinkRow
                    icon={<Octicon icon={Person} size={36}/>}
                >
                    Tom Chesters
                </LinkRow>
                <LinkRow
                    href="mailto:tom@tomaaato.xyz"
                    icon={<Octicon icon={Mention} size={36}/>}
                >
                    tom@tomaaato.xyz
                </LinkRow>
                <LinkRow
                    href="https://www.linkedin.com/in/tomaaatoxyz/"
                    icon={
                        <img 
                            src={linkedinImage}
                            alt="LinkedIn icon."
                        />
                    }
                    externalImg
                >
                    /tomaaatoxyz
                </LinkRow>
            </PlatformLinks>
        </>
    }
}