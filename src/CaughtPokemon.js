import React, { useState } from "react";

const CaughtPokemon = () => {
  let date = new Date().toLocaleDateString();

  const [caught, setCaught] = useState(0);
  const [pokemoncaught, setPokemoncaught] = useState([]);


  function catchPokemon() {
    let pokemonArray = ["Butterfree", "Spearow", "Ditto","Pikachu"];
    const random = Math.floor(Math.random() * pokemoncaught.length);
    setCaught(caught + 1);
    setPokemoncaught(pokemoncaught.concat(pokemonArray[random]));
  }

  return (
    <div>
      <p>
        Caught {caught} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>CaughtPokemon</button>
      <ul>
        {pokemoncaught.map((name, index)=> {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
