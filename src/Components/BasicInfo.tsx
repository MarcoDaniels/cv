import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as user from '@fortawesome/fontawesome-free-solid/faUser'
import * as map from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import { socialMediaFragment, userInfoFragment } from '../Query/types'
import SocialMedia from './SocialMedia'
import * as spinner from '@fortawesome/fontawesome-free-solid/faSpinner'

export type BasicInfoState = {
    imgLoaded: boolean
}
export type BasicInfoProps = {
    user: userInfoFragment
    socialMedia: socialMediaFragment
}

type UserDataProps = {
    render: boolean
    basicInfo: userInfoFragment
    socialMedia: socialMediaFragment
}

const UserData: React.SFC<UserDataProps> = props => {
    const {render, basicInfo, socialMedia} = props

    if (render) {
        return(
            <div>
                <div className="info">
                    <div>
                        <span className="info-icon"><FontAwesomeIcon icon={user}/></span>
                        <span className="info-text">{basicInfo.name}</span>
                    </div>
                    <div>
                        <span className="info-icon"><FontAwesomeIcon icon={map}/></span>
                        <span className="info-text">Odense, Denmark</span>
                    </div>
                </div>
                <hr/>
                <SocialMedia user={socialMedia}/>
            </div>
        )
    }

    return (
        <div className="section section-big">
            <span className="loading">
                <FontAwesomeIcon icon={spinner} size={'4x'} spin={true}/>
            </span>
        </div>
    )
}

class BasicInfo extends React.Component<BasicInfoProps, BasicInfoState> {
    constructor(props: any) {
        super(props)
        this.state = { imgLoaded: false }
    }

    handleImageLoaded() {
        this.setState({ imgLoaded: true });
    }

    render() {
        return (
            <div>
                <img
                    className="u-max-full-width"
                    src={this.props.user.image ? this.props.user.image : ''}
                    onLoad={this.handleImageLoaded.bind(this)}
                />
                <UserData
                    render={this.state.imgLoaded}
                    basicInfo={this.props.user}
                    socialMedia={this.props.socialMedia}
                />
            </div>
        )
    }
}

export default BasicInfo