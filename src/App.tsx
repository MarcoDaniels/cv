import * as React from 'react'
import { Query } from 'react-apollo'
import { loadAppQuery } from './Query/types'
import { loadApp } from './App.queries'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

class LoadApp extends Query<loadAppQuery> {}

const App: React.SFC = () => {
    return (
        <LoadApp query={loadApp}>
            {({loading, data, error}) => {
                if (error || loading || !data || !data.user || !data.user.get) { return null }

                const user = data.user.get
                const welcomeMessage = user.welcomeMessage ? user.welcomeMessage.join() : ''

                return (
                    <div>
                        <Header name={user.name} welcomeMessage={welcomeMessage}/>
                        <Content description={user.description}/>
                        <Footer name={user.name}/>
                    </div>
                )
            }}
        </LoadApp>
    )
}

export default App
