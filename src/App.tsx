import * as React from 'react'
import { Query } from 'react-apollo'
import { config } from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as spinner from '@fortawesome/fontawesome-free-brands/faReact'
import { loadAppQuery } from './Query/types'
import { loadApp } from './App.queries'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

config.autoAddCss = false

class LoadApp extends Query<loadAppQuery> {}

const App: React.SFC = () => {
    return (
        <LoadApp query={loadApp}>
            {({loading, data, error}) => {
                if (error || !data) {
                    return (
                        <div className="section section-big">
                            <FontAwesomeIcon icon={spinner} size={'6x'}/>
                            <h1>Oops, something went wrong.</h1>
                            <p>Try to refresh the page, or come back latter.</p>
                        </div>
                    )
                }

                if (loading) {
                    return (
                        <div className="section section-big loading">
                            <FontAwesomeIcon icon={spinner} size={'6x'} spin={true} />
                            <h1>...loading Marco Daniel's CV...</h1>
                        </div>
                    )
                }

                if (!data.user || !data.user.get) { return null }

                const user = data.user.get
                const welcomeMessage = user.welcomeMessage ? user.welcomeMessage.join() : ''

                return (
                    <div>
                        <Header name={user.name} welcomeMessage={welcomeMessage}/>
                        <Content description={user} info={user} socialMedia={user} skills={user}/>
                        <Footer name={user.name}/>
                    </div>
                )
            }}
        </LoadApp>
    )
}

export default App
