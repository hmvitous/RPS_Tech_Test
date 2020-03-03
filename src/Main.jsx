import React from 'react';
import GameHeader from './GameHeader'
import PlayerImage from './PlayerImage'



const Main = () => {

  var player1 = <PlayerImage type='Player' choice="1" id="1" />

  const onButtonClick = function (event) {
    const clickedChoice = event.currentTarget.id
    console.log ("clicked " + clickedChoice)
    player1.choice = clickedChoice
  }

  return (
    <div>
      <GameHeader />
      {player1}
      <PlayerImage type='Player' choice="1" id="1" /> 
      <img src="../dist/images/vs.png"></img>   
      <PlayerImage type='Computer' choice="2" id="2" />
      <div className='button'>
        <button id='3' onClick={onButtonClick}>Rock</button>
        <button id='1' onClick={onButtonClick}>Paper</button>
        <button id='2' onClick={onButtonClick}>Scissors</button>
      </div>
    </div>
  );
};

export default Main;
