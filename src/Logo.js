
const Logo = ({ appName, onClickHandler }) => {
    //let appName = "CYF";
    return (
    <header>
    <h1>Welcome to the {appName}'s Pokedex</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pekenon" onClick={onClickHandler} ></img>
    </header>
    );
  };

  export default Logo;