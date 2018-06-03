import * as React from 'react'
import { Query } from 'react-apollo'
import { loadAppQuery } from './Query/types'
import { loadApp } from './App.queries'

class LoadApp extends Query<loadAppQuery> {}

const isServerSide = typeof window === 'undefined'

export const App: React.SFC = () => {
    return (
        <LoadApp query={loadApp}>
            {({loading, data, error}) => {
                if (error || loading || !data || !data.user || !data.user.get) {
                    return null
                }

                const user = data.user.get
                return (
                    <div className="container">
                        <div className="row">
                            <div className="eleven columns">
                                <h1>{user.name}</h1>
                                <p>{user.welcomeMessage}</p>
                            </div>
                            <div className="one column">
                                <p>{isServerSide ? 's' : 'c'}</p>
                            </div>
                        </div>
                    </div>
                )
            }}
        </LoadApp>
    )
}

export default App
