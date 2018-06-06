import * as React from 'react'
import { socialMediaFragment } from '../Query/types'

export type SocialMediaProps = {
    user: socialMediaFragment
}

const SocialMedia: React.SFC<SocialMediaProps> = props => {
    const {socialMedia} = props.user

    return (
        <div className="info">
            {socialMedia && socialMedia.map((media, i) => media && (
                <div key={i}>
                    <a href={media.url ? media.url : ''} target="_blank">
                        /{media.displayName}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default SocialMedia