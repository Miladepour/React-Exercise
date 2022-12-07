import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import React from "react";

function App() {
   let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
    <Logo name="CYF" />
    <BestPokemon props = {abilities} />
    <CaughtPokemon />
    </div>
  );
}

export default App;

