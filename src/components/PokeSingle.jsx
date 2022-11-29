import { Component } from "react";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
        });
      });
  }

  render() {
    console.log(this.props.params.pokesingle);
    if (this.state.isLoading) {
      return <div>Loading......</div>;
    } else {
      return (
        <div>
          <div>{this.state.data.name}</div>
          <img
            src={
              this.state.data.sprites?.other["official-artwork"].front_default
            }
            alt=""
          />
        </div>
      );
    }
  }
}

export default PokeSingle;
