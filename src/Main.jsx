import React from 'react';

const Main = () => {
  return (
    <div>
      <div className='banner'>
        <img id='banner-image' src='../dist/images/no-image.jpg'></img>
      </div>
      <div>
        <div className='title'>
          <h1 id='player-title'>Player</h1>
          <h3 id='vs'>VS.</h3>
          <h1 id='computer-title'>Computer</h1>
        </div>
      </div>

      <div className='image'>
        <img id='player-image' src='../dist/images/no-image.jpg'></img>
        <img id='computer-image' src='../dist/images/no-image.jpg'></img>
      </div>

      <div className='button'>
        <button id='rock-button'>Rock</button>
        <button id='paper-button'>Paper</button>
        <button id='scissors-button'>Scissors</button>
      </div>
    </div>
  );
};

export default Main;
