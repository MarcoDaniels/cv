import * as React from 'react'
import { getDescriptionQuery } from '../Query/types'
import { Query } from 'react-apollo'
import { loadDescription } from '../App.queries'

class GetDescription extends Query<getDescriptionQuery> {}

const Description: React.SFC = () => {

    return (
        <GetDescription query={loadDescription}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (<div>Loading ...</div>)
                }

                if (!data.user || !data.user.get) { return null }

                const user = data.user.get
                return (
                    <div>
                        {user.description && user.description.map((item, i) => item && (
                            <div key={i}>{item}</div>
                        ))}
                    </div>
                )
            }}
        </GetDescription>
    )
}

export default Description