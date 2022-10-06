import React, { useState, useEffect} from 'react';
import Score from './Score';
import CardsArea from './CardsArea';
import '../styles/gameStyle.css'

function Game(){
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [cardAmount, setCardAmount] = useState(4);
    const [cardsSoFar, setCardsSoFar] = useState(4);

    function updateScore(){
        setScore(score+1)
    }

    // update best score
    useEffect(() => {
        if(bestScore < score){
            setBestScore(score)
        }
        // If player guessed all the cards in current batch, go to next level
        if(score === cardsSoFar){
            setLevel(level + 1);
            setCardAmount(cardAmount + 2);
            setCardsSoFar(cardsSoFar + cardAmount + 2);
        }
    }, [score]
    )

    return (
        <div id="game">
            <Score level={level} current={score} best={bestScore}/>
            <CardsArea cardsNum={cardAmount} onHit={updateScore}/>
        </div>
    )
}

export default Game;
