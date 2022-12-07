function logWhenClicked (){
console.log("Clicked on the image");
}

const Logo = (props) => {
    //let appName = "CYF";
    console.log(props);
    return (
    <header>
    <h1>Welcome to the {props.appName}'s Pokedex</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pekenon" onClick={logWhenClicked}></img>
    </header>
    );
  };

  export default Logo;