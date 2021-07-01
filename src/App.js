import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

    const [lista, setLista] = useState({})
    const [Nav, setNav] = useState([])
    
  //carrega primeira chamada na api, ao ser montado o componente na DOM, e apenas.
    useEffect(() => {
        const ran = Math.floor(Math.random() * 83) +1;
          axios.get(`https://swapi.dev/api/people/${ran}/`)
          .then(resp =>  {
            setLista(resp.data)
            
        })
    },[])


  //busca aleatória dos porsonagens, baseado no evento de click do botão
    const btn = () => {
      const ran = Math.floor(Math.random() * 83) +1;
        axios.get(`https://swapi.dev/api/people/${ran}/`)
        .then(resp => {
          setLista(resp.data)
          
   
  //captura os valores do array starships
          const URLnaves = resp.data.starships
          URLnaves.forEach(apiNaves)
          
        })
    }
  //funcao do forEach para varrer o array e já fazer a chamada na api, armazenando no hook Nav
    function apiNaves (naves){
      const APInav = naves
      axios.get(`${APInav}`)
      .then(resposta => {
        setNav([resposta.data.name])
       
        
      })
    }

   
  return (
    
    <div className="container">
      <div className="conteudo">
        <h1>Nome: {lista.name} </h1>
        <p>Peso: {lista.mass} </p>
        <p>Altura: {lista.height} </p>
        <p>Cor da pele: {lista.skin_color} </p>
        <p>Cor do cabelo: {lista.hair_color} </p>
        <h2>Naves: </h2>
        {Nav.map((nav1) => (<p>{nav1}</p>))}

        <button className="btn" onClick={() => btn()}>Personagens</button>
      </div>
    </div>
  )

}

export default App;