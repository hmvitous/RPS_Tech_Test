import React from 'react'
import rock from '../dist/images/rock.jpg'
import paper from '../dist/images/paper.jpg'
import scissors from '../dist/images/scissors.jpg'

const Player = ({ choices }) => {
    return (
        <div className='player'>
            <img className='player-image'
            src= {
                choices === 'rock' ? rock : choices === 'paper' ? paper : scissors
            }
            />
        </div>

    )
}

export default Player