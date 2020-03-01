import React from 'react';

const Main = () => {
  return (
    <div>
      <div className='banner'>
        <img id='banner-image' src='../dist/images/banner.png'></img>
      </div>
      <div>
        <div className='title'>
          <h1 id='player-title'>Player</h1>
          <img id='vs' src='../dist/images/vs.png'></img>
          <h1 id='computer-title'>Computer</h1>
        </div>
      </div>

      <div className='image'>
        <img id='player-image' src='../dist/images/paper.png'></img>
        <img id='computer-image' src='../dist/images/rock.png'></img>
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
