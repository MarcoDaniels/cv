import * as React from 'react'
import { socialMediaFragment } from '../Query/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as facebook from '@fortawesome/fontawesome-free-brands/faFacebookF'
import * as linkedin from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import * as github from '@fortawesome/fontawesome-free-brands/faGithub'
import * as instagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import * as twitter from '@fortawesome/fontawesome-free-brands/faTwitter'

export type SocialMediaProps = {
    user: socialMediaFragment
}

const SocialMedia: React.SFC<SocialMediaProps> = props => {
    const {socialMedia} = props.user

    return (
        <div className="info info-social">
            {socialMedia && socialMedia.map((media, i) => media && (
                <div key={i}>
                    <span className="info-icon">
                        <FontAwesomeIcon icon={getMeIcon(media.identifier ? media.identifier : '')}/>
                    </span>
                    <span className="info-text">
                        <a href={media.url ? media.url : ''} target="_blank">
                            /{media.displayName}
                        </a>
                    </span>
                </div>
            ))}
        </div>
    )
}

function getMeIcon(identifier: string) {
    switch (identifier) {
        case 'facebook':
            return facebook
        case 'twitter':
            return twitter
        case 'linkedin':
            return linkedin
        case 'github':
            return github
        case 'instagram':
            return instagram
        default:
            return facebook
    }
}

export default SocialMedia