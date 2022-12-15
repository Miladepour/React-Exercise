import React, { useState } from "react";

const CaughtPokemon = () => {
  let date = new Date().toLocaleDateString();

  const [caught, setCaught] = useState(0);
  const [pokemoncaught, setPokemoncaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");


  function catchPokemon(event) {
    // let pokemonArray = ["Butterfree", "Spearow", "Ditto","Pikachu"];
    // const random = Math.floor(Math.random() * pokemoncaught.length);
    event.preventDefault();
    if (pokemonNameInput.trim().length !== 0) {
      console.log("input value is NOT empty");
      setCaught(caught + 1);
      setPokemoncaught(pokemoncaught.concat(pokemonNameInput));
      setPokemonNameInput("");
    } else {
      console.log("input value is empty");
    }
  }


  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  return (
    <div>
      <p>
        Caught {caught} Pokemon on {date}
      </p>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange}  />
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
