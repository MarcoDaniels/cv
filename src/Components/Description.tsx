import * as React from 'react'

export type DescriptionProps = {
    description: Array<string | null> | null
}

const Description: React.SFC<DescriptionProps> = props => {
    const {description} = props
    return (
        <div>
            {description && description.map((item, i) => item && (
                <div key={i}>{item}</div>
            ))}
        </div>
    )
}

export default Description