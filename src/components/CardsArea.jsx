import React, { useEffect, useState } from 'react';
import Card from './Card'



function CardsArea(props){
    const [cards, setCards] = useState([]);
    // This is used to stop an extra api call with react strict mode.
    let fetched = false;

    // Returns a string with num character ids,
    // in a format suitable to be used by the API
    function getRandomCharactersIDs(num){
        const ids = new Set()
        while(ids.size < num){
            // get a random number from 0 to 826
            ids.add(Math.floor(Math.random() * 826))
        }
        return [...ids]
    }

    // Fetches characters from rick and morty API
    async function getCharacters(){
        console.log(getRandomCharactersIDs(10))
        fetched = true;
        try{
        await fetch(`https://rickandmortyapi.com/api/character/${getRandomCharactersIDs(10)}`, {
          method: "GET",
          mode: "cors",
        })
          .then((data) => data.json())
          .then((json) => {
            console.log(json);
            [...json].forEach((character) => {
              const {name, image} = character;
              setCards(prevCards => [...prevCards, {name, image}]);
            }
            );
          });
        } catch (error){
            console.log(error)
        }
    }

    // fetch data from api on mount
    useEffect(() => {
        if(!fetched){
        getCharacters();
        }
    }, [])

    return (
        <div id='cards-area'>
           {cards.map(card => <Card key={card.name} name={card.name} image={card.image}/>)}
        </div>
    )
}

export default CardsArea;