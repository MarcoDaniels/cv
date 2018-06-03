import * as React from 'react'

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome!</h1>
                </header>
                <p className="App-intro">
                    This page is being rendered server-side!
                </p>
            </div>
        )
    }
}

export default App
