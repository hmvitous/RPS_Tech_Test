import React, { Component } from "react";
import GameHeader from "./GameHeader";
import PlayerImage from "./PlayerImage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      player: <PlayerImage type="Player" choice="0" />,
      computer: <PlayerImage type="Computer" choice="0" />
      
    };
    
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    const clickedChoice = event.currentTarget.id;
    const randomChoice = Math.floor(Math.random() * 3)+1
    console.log("player plays " + clickedChoice);
    console.log("computer plays " + randomChoice);

    this.setState({
      player: <PlayerImage type="Player" choice={clickedChoice} />,
      computer: <PlayerImage type="Computer" choice={randomChoice} />
    });
    
    const result = this.getResult(clickedChoice, randomChoice)
    console.log(result)
  }

  getResult(clickedChoice, randomChoice) {

    if (clickedChoice == randomChoice)
    return "Tie"

    if (clickedChoice == 1 && randomChoice == 3 )
    return "You Win"

    if (clickedChoice == 1 && randomChoice == 2 )
    return "You Lose"

    if (clickedChoice == 2 && randomChoice == 1 )
    return "You Win"

    if (clickedChoice == 2 && randomChoice == 3 )
    return "You Lose"

    if (clickedChoice == 3 && randomChoice == 1 )
    return "You Lose"

    if (clickedChoice == 3 && randomChoice == 2 )
    return "You Win"
  }

  render() {
    return (
      <div>
        <GameHeader />
        {this.state.player}

        <img src="../dist/images/vs.png"></img>
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
        </div>
      </div>
    );
  }
}

export default Main;
