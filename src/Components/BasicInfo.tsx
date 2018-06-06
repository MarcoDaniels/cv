import * as React from 'react'
import { userInfoFragment } from '../Query/types'

export type BasicInfoProps = {
    user: userInfoFragment
}

const BasicInfo: React.SFC<BasicInfoProps> = props => {
    const {name, image} = props.user

    return (
        <div>
            <img className="u-max-full-width" src={image && image.url ? image.url : ''}/>
            <div className="info">
                <div>{name}</div>
                <div>Odense, Denmark</div>
            </div>
        </div>
    )
}

export default BasicInfo