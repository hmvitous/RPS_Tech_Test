import React from 'react'

const Main = () => {
    return (
        <div>
            <div className='banner'>
                <img id='banner-image' src='../dist/images/no-image.jpg'></img>
            </div>
           
            <div className='image'>
                <img id='rock-image' src='../dist/images/no-image.jpg'></img>
                <img id='paper-image' src='../dist/images/no-image.jpg'></img>
                <img id='scissors-image' src='../dist/images/no-image.jpg'></img>
            </div>
            
            <div className='button'>
                <button id='rock-button'>Rock</button>
                <button id='paper-button'>Paper</button>
                <button id='scissors-button'>Scissors</button>
            </div>

        </div>
       
    )
}    

export default Main