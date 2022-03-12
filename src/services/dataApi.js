const urlApi = 'https://rickandmortyapi.com/api'

export const getAllCharacteres = () => 
    fetch(`${urlApi}/character`)
    .then(res => res.json())
    .then(data => data.results)
    .catch(error => console.log(error))
