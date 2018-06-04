import * as React from 'react'

export type FooterProps = {
    name: string | null
}

const isServerSide = typeof window === 'undefined'

const Footer: React.SFC<FooterProps> = props => {
    const {name} = props
    return (
        <div className="row footer">
            <div className="container">
                <p>CV - {name} {isServerSide ? <span className="render">&reg;</span> : <span className="render">&copy;</span>}</p>
            </div>
        </div>
    )
}

export default Footer