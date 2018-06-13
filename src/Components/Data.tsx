import * as React from 'react'
import { Query } from 'react-apollo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as spinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import { loadDataQuery } from '../Query/types'
import { loadData } from '../App.queries'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'

class GetData extends Query<loadDataQuery> {}

const Data: React.SFC = () => {
    return (
        <GetData query={loadData}>
            {({loading, data, error}) => {
                if (error || !data) { return null }

                if (loading) {
                    return (
                        <div className="section section-big">
                            <span className="loading">
                                <FontAwesomeIcon icon={spinner} size={'4x'} spin={true}/>
                            </span>
                        </div>
                    )
                }

                if (!data.user || !data.user.get) { return null }
                const user = data.user.get

                return (
                    <div>
                        <Experience user={user}/>
                        <Education user={user}/>
                        <Projects user={user}/>
                    </div>
                )
            }}
        </GetData>
    )
}

export default Data