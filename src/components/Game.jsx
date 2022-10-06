import React, { useState, useEffect} from 'react';
import Score from './Score';
import CardsArea from './CardsArea';
import '../styles/gameStyle.css'

function Game(){
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    function updateScore(){
        setScore(score+1)
    }

    // update best score
    useEffect(() => {
        if(bestScore < score){
            setBestScore(score)
        }
    }, [score]
    )

    return (
        <div id="game">
            <Score current={score} best={bestScore}/>
            <CardsArea onHit={updateScore}/>
        </div>
    )
}

export default Game;
