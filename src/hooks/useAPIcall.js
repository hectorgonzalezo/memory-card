fetch('https://rickandmortyapi.com/api/character', {method: 'GET', mode: 'cors'})
.then(data => data.json())
.then(json => {
   console.log([...json.results]);
    [...json.results].forEach(character => console.log(character.name))
})