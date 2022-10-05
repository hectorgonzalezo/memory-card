
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

export {getRandomCharactersIDs}