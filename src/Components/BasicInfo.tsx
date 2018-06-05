import * as React from 'react'
import { userInfoFragment } from '../Query/types'

export type BasicInfoProps = {
    user: userInfoFragment
}

const BasicInfo: React.SFC<BasicInfoProps> = props => {
    const {name} = props.user

    return (
        <div>
            <p>picture</p>
            <p>{name}</p>
            <p>location</p>
        </div>
    )
}

export default BasicInfo