import * as React from 'react'

export type DescriptionProps = {
    description: Array<string | null> | null
}

const Description: React.SFC<DescriptionProps> = props => {
    const {description} = props
    return (
        <div className="section description">
            {description && description.map((item, i) => item && (
                <p key={i}>{item}</p>
            ))}
        </div>
    )
}

export default Description