import React from 'react';
import '../styles/popupStyle.css';

function Popup(props){
    return (
        <div id='pop-up' className={'card ' + props.visible}>
        <h3>Game over!</h3>
        <h4>Your score was <i>{props.score}</i></h4>
        {props.best === props.score ? <h4>Congratulations, this is your best score so far!</h4> : null}
        <button onClick={props.buttonClick}>Restart Game</button>
        </div>
    )
}

export default Popup