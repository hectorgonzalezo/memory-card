import { shuffleCards, getRandomCharactersIDs } from '../auxiliaries/cardsAreaHelpers';
import React, { useEffect, useState } from 'react';
import Card from './Card'



function CardsArea(props){
    const [cards, setCards] = useState([]);
    // Keeps track of cards that have been pressed already
    let[pressedCards, setPressedCards] = useState([]);

    // This is used to stop an extra api call with react strict mode.
    let fetched = false;

    // Fetches characters from rick and morty API
    async function getCharacters(){
        fetched = true;
        try{
        await fetch(`https://rickandmortyapi.com/api/character/${getRandomCharactersIDs(5)}`, {
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

    function randomizeCards(){
        if(cards.length > 1){
            console.log('randomized')
        setCards(shuffleCards(cards))
        }
    }

    function clickCard(e){
        if(!pressedCards.includes(e.target.id)){
            console.log('pressedcards updated')
            setPressedCards(prevCards => [...prevCards, e.target.id])
        }
    }

    // fetch data from api on mount
    useEffect(() => {
        if(!fetched){
            getCharacters();
        }
    }, [])

    // Reorders cards randomly on press
    useEffect(() => {
        randomizeCards()
    }, [pressedCards])


    return (
      <div id="cards-area">
        {cards.map((card) => (
          <Card
            key={card.name}
            id={card.name}
            name={card.name}
            image={card.image}
            clickFunc={clickCard}
          />
        ))}
      </div>
    );
}

export default CardsArea;