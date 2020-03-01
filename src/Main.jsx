import React from "react";

const Main = () => {
  return (
    <div>
      <div className="banner">
        <img id="banner-image" src="../dist/images/paper.jpg"></img>
      </div>
      <div>
        <div className="title">
          <h1 id="player-title">Player</h1>
          <h3 id="vs">VS.</h3>
          <h1 id="computer-title">Computer</h1>
        </div>
        <div>
          <Player choices={player}></Player>
          <Player choices={computer}></Player>
        </div>
        selectItem = item => {this.setState((player: item), (message: ""))}
      </div>

      <div className="button">
        <button
          id="rock-button"
          onClick={() => {
            this.selectItem("rock");
          }}
        >
          Rock
        </button>

        <button
          id="paper-button"
          onClick={() => {
            this.selectItem("paper");
          }}
        >
          Paper
        </button>

        <button
          id="scissors-button"
          onClick={() => {
            this.selectItem("scissors");
          }}
        >
          Scissors
        </button>
      </div>
    </div>
  );
};

export default Main;
