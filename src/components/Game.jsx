import React from 'react';
import Score from './Score';
import CardsArea from './CardsArea';
import '../styles/gameStyle.css'

function Game(){
    return (
        <div id="game">
            <Score />
            <CardsArea />
        </div>
    )
}

export default Game;
