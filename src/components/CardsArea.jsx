import { getRandomCharactersIDs } from '../auxiliaries/cardsAreaHelpers';
import { shuffle } from 'lodash';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import swoosh from '../assets/swoosh.mp3';

const audio = new Audio(swoosh);

function CardsArea(props){
    const [cards, setCards] = useState([]);
    // Keeps track of cards that have been pressed already
    let[pressedCards, setPressedCards] = useState([]);
    // changes depending on the level of the game

    // Allows cards to disappear
    const [disappear, setDisappear] = useState('');

    // This is used to stop an extra api call with react strict mode.
    let fetched = false;

    // Fetches characters from rick and morty API
    async function getCharacters(){
        fetched = true;
        try{
            setCards([])
            if(props.cardsNum === 0){
                return
            }
        await fetch(`https://rickandmortyapi.com/api/character/${getRandomCharactersIDs(props.cardsNum)}`, {
          method: "GET",
          mode: "cors",
        })
          .then((data) => data.json())
          .then((json) => {
            const newCards = [];
            [...json].forEach((character) => {
              const {name, image} = character;
              newCards.push({name, image})
            //   setCards(prevCards => [...prevCards, {name, image}]);
            }
            );

            setCards(newCards)
          });
        } catch (error){
            // If it couldn't fetch the resources
            console.log(error)
        }
    }

    function clickCard(e){
        const cardName = e.target.getAttribute('data');
        if(!pressedCards.includes(cardName)){
            setPressedCards(prevCards => [...prevCards, cardName])
        } else{
            props.onMiss();
            setCards([])
        }
    }

    // Reorders cards randomly on press
    useEffect(() => {
        // Shuffle cards
        if(cards.length > 1){
            if(pressedCards.length !== props.cardsNum){
                setDisappear('disappear')
                const shuffledCards = shuffle([...cards])
                setTimeout(() => {
                    setCards(shuffledCards)
                    setDisappear('')
                    audio.play();
                }, 500);
        }
        // update score
        props.onHit();
        }
    }, [pressedCards]);

    // Fetch new cards when level changes
    useEffect(() =>{
        if(!fetched){
            getCharacters();
            setPressedCards([])
        }
    }, [props.cardsNum])


    return (
      <div id="cards-area" className={props.className}>
        {cards.map((card) => {
          return <Card
            className='card'
            disappear={disappear}
            key={card.name}
            data={card.name}
            name={card.name}
            image={card.image}
            clickFunc={clickCard}
          />
        })}
      </div>
    );
}

export default CardsArea;
