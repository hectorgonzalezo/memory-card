import React, { useEffect, useState } from 'react';
import Card from './Card'

function CardsArea(props){
    const [cards, setCards] = useState([]);
    // This is used to stop an extra api call with react strict mode.
    let fetched = false;

    // Fetches characters from rick and morty API
    async function getCharacters(){
        fetched = true;
        await fetch("https://rickandmortyapi.com/api/character", {
          method: "GET",
          mode: "cors",
        })
          .then((data) => data.json())
          .then((json) => {
            [...json.results].forEach((character) => {
              const {name, image} = character;
              setCards(prevCards => [...prevCards, {name, image}]);
            }
            );
          });
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