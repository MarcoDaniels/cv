import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as user from '@fortawesome/fontawesome-free-solid/faUser'
import * as map from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
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
                <div>
                    <span className="info-icon"><FontAwesomeIcon icon={user}/></span>
                    <span className="info-text">{name}</span>
                </div>
                <div>
                    <span className="info-icon"><FontAwesomeIcon icon={map}/></span>
                    <span className="info-text">Odense, Denmark</span>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo