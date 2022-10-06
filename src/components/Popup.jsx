import React from 'react';
import '../styles/popupStyle.css';

function Popup(props){
    return (
        <div id='pop-up' className={'card ' + props.visible}>
        <h3>Game over!</h3>
        <h4>Congratulations! your score was <i>{props.score}</i></h4>
        <button onClick={props.buttonClick}>Restart Game</button>
        </div>
    )
}

export default Popup