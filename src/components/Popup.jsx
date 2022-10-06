import React from 'react';
import '../styles/popupStyle.css';

function Popup(){
    return (
        <div id='pop-up' className='visible card'>
        <h3>You lost!</h3>
        <button>Restart Game</button>
        </div>
    )
}

export default Popup