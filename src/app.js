import React from 'react'
import Main from './Main'
import Footer from './Footer'
import Player from './Player'

const choices = [ 'rock', 'paper', 'scissors' ]
class App extends Component {
    state = {
        player: choices[0],
        computer: choices[0],
        winner: ''
    }

    render () {
        const [player, computer, winner] = this.state
        return (
            <>
                <Main />
                <Player />
                <Footer />
            </>
        )
    }
}