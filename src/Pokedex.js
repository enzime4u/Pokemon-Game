import React, { Component } from "react";
import Pokecard from "./Pokecard";

import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h4>Total experience: {this.props.exp}</h4>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map(pokemon => (
            <Pokecard
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
