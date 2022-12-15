import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import React, { useState }  from "react";
import PokemonMoves from "./PokemonMoves";


function logWhenClicked (){
  console.log("Clicked on the image");
  }


function App() {
   let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
    <Logo appName="CYF" onClickHandler={logWhenClicked}  />
    <BestPokemon props = {abilities} />
    <CaughtPokemon />
    <PokemonMoves />
    </div>
  );
}

export default App;

