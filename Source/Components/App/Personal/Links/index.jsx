import * as React from 'react'
import PlatformLinks from '../../PlatformLinks'
import LinkRow from '../../PlatformLinks/LinkRow'
import Octicon, { MarkGithub } from '@primer/octicons-react'
import stackOverflowImage from './stack-overflow.svg'
import instagramImage from './instagram.svg'
import mediumIcon from './medium.png'
import './styles.css'

export default function Links() {
    return (
        <div className="personal__links">
            <PlatformLinks>
                <LinkRow
                    href="https://github.com/MakingUtopia/"
                    icon={
                        <Octicon 
                            icon={MarkGithub} 
                            size={36}
                        />
                    }
                >
                    /MakingUtopia
                </LinkRow>
                <LinkRow
                    href="https://stackoverflow.com/users/12291395/tomaaato-xyz"
                    icon={<img 
                        src={stackOverflowImage}
                        alt="StackOverflow icon."
                    />}
                >
                    .../tomaaato-xyz
                </LinkRow>
                <LinkRow
                    href="https://medium.com/@tom.chesters96"
                    icon={<img 
                        src={mediumIcon}
                        alt="Medium icon."
                    />}
                    externalImg
                >
                    @tom.chesters96
                </LinkRow>
                <LinkRow
                    href="https://instagram.com/tomaaato_xyz/"
                    icon={<img 
                        src={instagramImage}
                        alt="Instagram icon."
                    />}
                    externalImg
                >
                    @tomaaato_xyz
                </LinkRow>
            </PlatformLinks>
        </div>
    )
}