import * as React from 'react'

export type HeaderProps = {
    name: string | null
    welcomeMessage: string | null
}

const Header: React.SFC<HeaderProps> = props => {
    const {name, welcomeMessage} = props
    return (
        <div className="row header">
            <div className="container">
                <div className="five columns">
                    <h1>{name}</h1>
                </div>
                <div className="seven columns welcome">
                    {welcomeMessage}
                </div>
            </div>
        </div>
    )
}

export default Header