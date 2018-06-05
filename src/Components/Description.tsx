import * as React from 'react'
import { descriptionFragment } from '../Query/types'

export type DescriptionProps = {
    description: descriptionFragment
}

const Description: React.SFC<DescriptionProps> = props => {
    const {description} = props.description
    return (
        <div className="section description">
            {description && description.map((item, i) => item && (
                <p key={i}>{item}</p>
            ))}
        </div>
    )
}

export default Description