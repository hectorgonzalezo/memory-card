import React from 'react';
import '../styles/popupStyle.css';

function Popup(props){
    return (
        <div id='pop-up' className={'card ' + props.visible}>
        <h3>You lost!</h3>
        <button onClick={props.buttonClick}>Restart Game</button>
        </div>
    )
}

export default Popup