import React, { Component } from "react";
import GameHeader from "./GameHeader";
import PlayerImage from "./PlayerImage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { player: <PlayerImage type="Player" choice="1" id="1" /> };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    const clickedChoice = event.currentTarget.id;
    console.log("clicked " + clickedChoice);
    this.setState({
      player: <PlayerImage type="Player" choice={clickedChoice} />
    });
  }

  render() {
    return (
      <div>
        <GameHeader />
        {this.state.player}

        <img src="../dist/images/vs.png"></img>
        <PlayerImage type="Computer" choice="2" id="2" />
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
