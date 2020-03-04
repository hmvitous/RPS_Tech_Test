import React, { Component } from "react";
import GameHeader from "./GameHeader";
import PlayerImage from "./PlayerImage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      player: <PlayerImage type="Player" choice="0" />,
      computer: <PlayerImage type="Computer" choice="4" />,
      result: "Play"
    };
    
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onReplayButtonClick = this.onReplayButtonClick.bind(this);
  }

  onButtonClick(event) {
    const clickedChoice = event.currentTarget.id;
    const randomChoice = Math.floor(Math.random() * 3)+1
    const result = this.getResult(clickedChoice, randomChoice)

    this.setState({
      player: <PlayerImage type="Player" choice={clickedChoice} />,
      computer: <PlayerImage type="Computer" choice={randomChoice} />,
      result: result
    });
  }

  onReplayButtonClick(event) {
    this.setState({
      player: <PlayerImage type="Player" choice="0" />,
      computer: <PlayerImage type="Computer" choice="4" />,
      result: "Play"
    });
  }

  getResult(clickedChoice, randomChoice) {

    if (clickedChoice == randomChoice) {
      return "Tie"
    }

    if (
      (clickedChoice == 1 && randomChoice == 3 ) ||
      (clickedChoice == 2 && randomChoice == 1 ) ||
      (clickedChoice == 3 && randomChoice == 2 )
      ) {
      return "You Win"
    }

    return "You Lose"
  }

  render() {
    return (
      <div>
        <GameHeader />
        {this.state.player}
        <img className="vs" src="../dist/images/vs.png"></img>
        {this.state.computer}
        <div className="button">
          <button id="3" onClick={this.onButtonClick}>
            Rock
          </button>
          <button id="1" onClick={this.onButtonClick}>
            Paper
          </button>
          <button id="2" onClick={this.onButtonClick}>
            Scissors
          </button>
          <button onClick={this.onReplayButtonClick}>
            Replay
          </button>
        </div>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Main;