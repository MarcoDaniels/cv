import * as React from 'react'

export type FooterProps = {
    name: string | null
}

const Footer: React.SFC<FooterProps> = props => {
    const {name} = props
    return (
        <div className="row footer">
            <div className="container">
                <div className="five columns">
                    <h1>{name}</h1>
                </div>
                <div className="seven columns header-welcome">
                    powered by: <a href="https://mylittlevirtualfriend.com" target="_blank">&lt;my little virtual friend&gt;</a>
                </div>
            </div>
        </div>
    )
}

export default Footer