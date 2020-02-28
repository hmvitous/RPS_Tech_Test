import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import Footer from './Footer'

const App = () => {
    return (
        <>
            <Main />
            <Footer />
        </>
    )
}

ReactDOM.render(
    <App />,
document.getElementById('app')
)
