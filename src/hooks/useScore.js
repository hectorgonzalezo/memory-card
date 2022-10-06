
import { useState, useEffect } from 'react';

function useScore(pressedCards){
    const [score, setScore] = useState('');
    setScore(pressedCards)
    console.log(score)
    return score
}


export default useScore