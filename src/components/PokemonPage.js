import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemons => this.setState( {pokemons} ))
  }

  setSearch=(e)=>{
    this.setState({
      searchTerm: e.target.value
    })
    console.log(this.state.searchTerm)
  }

  addPoke=(poke)=>{
    let formattedPoke ={
      name: poke.name,
      sprites: {
        front: poke.frontUrl,
        back: poke.backUrl
      },
      stats: [{name: "hp", value: poke.hp}]
    }
    
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formattedPoke) 
    })
    .then(res => res.json())
    .then(newPoke => {
      let newPokeArray = [...this.state.pokemons, newPoke]
      this.setState( { pokemons: newPokeArray} )
    })
  }

  render() {
    let filteredPoke = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke} />
        <br />
        <Search searchTerm={this.state.searchTerm} setSearch={this.setSearch} />
        <br />
        <PokemonCollection pokemons={filteredPoke}/>
      </Container>
    )
  }
}

export default PokemonPage
