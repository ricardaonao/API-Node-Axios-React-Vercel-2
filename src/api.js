import axios from 'axios';

// existe 83 personagens. este método gera umnúmero aleatório entre 1 e 83
const ran = Math.floor(Math.random() * 83) +1;

//número aleatório armazenado na const ran, é contatenado com a url
const api = axios.create({
    baseURL: `https://swapi.dev/api/people/${ran}/`
});

export default api;

