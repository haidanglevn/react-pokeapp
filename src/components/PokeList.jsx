import React from "react";
import Card from "./Card";
import classes from "./PokeList.module.css";

import { Component } from "react";

class PokeList extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });

        Promise.all(fetches).then((res) => {
          this.setState({
            data: res,
            isLoading: false,
          });
        });
      });
  }
  render() {
    console.log(this.state.data);
    const cardRender = this.state.data.map((pokemon) => {
      let type = pokemon.types.map((pokemon) => pokemon.type.name);
      console.log(type);
      return (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.sprites.other["official-artwork"].front_default}
          type={type}
        />
      );
    });
    if (this.state.isLoading) {
      return (
        <div className={classes.pokelist}>
          <h1>PokeList here</h1>
          <p>Page is loading.....</p>
        </div>
      );
    } else {
      return (
        <div className={classes.pokelist}>
          <h1>PokeList here</h1>

          {}
          <div className={classes.cardContainer}>{cardRender}</div>
        </div>
      );
    }
  }
}

export default PokeList;
