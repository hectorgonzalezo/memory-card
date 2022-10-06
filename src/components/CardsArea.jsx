import { getRandomCharactersIDs } from '../auxiliaries/cardsAreaHelpers';
import { shuffle } from 'lodash';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import swoosh from '../assets/swoosh.mp3';
import uniquid from 'uniquid';

const audio = new Audio(swoosh);

function CardsArea(props){
    const [cards, setCards] = useState([]);
    // Keeps track of cards that have been pressed already
    let[pressedCards, setPressedCards] = useState([]);
    // changes depending on the level of the game

    // This is used to stop an extra api call with react strict mode.
    let fetched = false;

    // Fetches characters from rick and morty API
    async function getCharacters(){
        fetched = true;
        try{
            if(props.cardsNum === 0){
                return
            }
            setCards([]);
        await fetch(`https://rickandmortyapi.com/api/character/${getRandomCharactersIDs(props.cardsNum)}`, {
          method: "GET",
          mode: "cors",
        })
          .then((data) => data.json())
          .then((json) => {
            [...json].forEach((character) => {
              const {name, image} = character;
              setCards(prevCards => [...prevCards, {name, image}]);
            }
            );
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
            const shuffledCards = shuffle([...cards])
            setCards([])
            setTimeout(() => {
                
            setCards(shuffledCards)
            }, 0);
            audio.play();
        // update score
        props.onHit();
        }
    }, [pressedCards]);

    // Fetch new cards when level changes
    useEffect(() =>{
        console.log('cards')
        if(!fetched){
            getCharacters();
        }
    }, [props.cardsNum])


    return (
      <div id="cards-area" className={props.className}>
        {cards.map((card) => {
          return <Card
            className='card'
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