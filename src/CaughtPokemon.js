import React, { useState } from "react";

const CaughtPokemon = () => {
  let date = new Date().toLocaleDateString();

  const [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught(caught + 1);
  }

  return (
    <div>
      <p>
        Caught {caught} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>CaughtPokemon</button>
    </div>
  );
};

export default CaughtPokemon;
