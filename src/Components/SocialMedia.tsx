import * as React from 'react'
import { socialMediaFragment } from '../Query/types'

export type SocialMediaProps = {
    user: socialMediaFragment
}

const SocialMedia: React.SFC<SocialMediaProps> = props => {
    const {socialMedia} = props.user

    return (
        <div>
            {socialMedia && socialMedia.map((media, i) => media && (
                <p key={i}>{media.name}</p>
            ))}
        </div>
    )
}

export default SocialMedia