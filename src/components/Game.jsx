import React, { useState, useEffect} from 'react';
import Score from './Score';
import CardsArea from './CardsArea';
import Popup from './Popup'
import uniquid from 'uniquid';
import '../styles/gameStyle.css'

function Game(){
    const [score, setScore] = useState(0);
    const [previousBestScore, setPreviousBestScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [cardAmount, setCardAmount] = useState(4);
    const [cardsSoFar, setCardsSoFar] = useState(4);

    const [gameInactive, setGameInactive]= useState('');
    const [popupShown, setPopupShown] = useState('');

    function updateScore(){
        setScore(score+1)
    }

    // update best score
    useEffect(() => {
        if(bestScore < score){
            setBestScore(score);
            if(previousBestScore < score){
                setPreviousBestScore(score);
            }
        }
        // If player guessed all the cards in current batch, go to next level
        if(score === cardsSoFar){
            setLevel(level + 1);
            setCardAmount(cardAmount + 2);
            setCardsSoFar(cardsSoFar + cardAmount + 2);
        }
    }, [score]
    )

    function looseGame(){
        setPopupShown('visible');
        setGameInactive('inactive')
    }

    function restartGame(){
        // Restart div visibilities
        setPopupShown('');
        setGameInactive('');

        // Restart game variables
        setScore(0);
        setLevel(1);
        setCardAmount(0);
        
        setTimeout(() => {
        setCardAmount(4);
        }, 0);
        
        setCardsSoFar(4);
    }

    return (
        <div id="game" >
            <Score level={level} current={score} best={previousBestScore} className={gameInactive}/>
            <CardsArea cardsNum={cardAmount} onHit={updateScore} onMiss={looseGame} className={gameInactive}/>
            <Popup score={score} best={previousBestScore} visible={popupShown} buttonClick={restartGame}/>
        </div>
    )
}

export default Game;
