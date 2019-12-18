import * as React from 'react'
import PlatformLinks from '../PlatformLinks'
import LinkRow from '../PlatformLinks/LinkRow'
import Octicon, { MarkGithub } from '@primer/octicons-react'
import stackOverflowImage from './stack-overflow.svg'
import instagramImage from './instagram.svg'
import './styles.css'

export default class Personal extends React.Component {
    render() {
        return (
            <section
                className="personal"
            >
                <div 
                    className="personal__row row align-items-center"
                >
                    <div className="personal__left-col col-lg-6">
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
                                /tomaaato-xyz
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
                    <div className="personal__right-col col-lg-6">
                        Right
                        (Graphic, link to GitHub Repo)
                    </div>
                </div>
            </section>
        )
    }
}