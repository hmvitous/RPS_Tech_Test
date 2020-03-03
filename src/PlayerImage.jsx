import React, { Component } from 'react';

const choices = { 
    0: "../dist/images/vs.png",
    1: "../dist/images/paper.png",
    2: "../dist/images/scissors.png",
    3: "../dist/images/rock.png"
}

class PlayerImage extends Component {
    state = {
        choice: 1
    }

    constructor(props) {
        super(props)
        this.state = { choice: props.choice }
    }

    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })
    
    render () {
        return (
            <div className='player-image' data-id={this.props.id}>
                <div className='title'>
                <h1 id='player-title'>{this.props.type}</h1>
                </div>
                <div className='image'>
                <img id='player-image-id' src={choices[this.props.choice]}></img>
                </div>
            </div>
        )
    } 
} 

export default PlayerImage;