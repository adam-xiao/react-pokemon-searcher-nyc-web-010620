import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state={
    flipped: false
  }
  
  pokeHp =()=>{
    let hp = this.props.pokemonInfo.stats.find( stats => stats.name === "hp")
    return hp.value
  }

  toggleImage =()=>{
    this.setState( {
      flipped: !this.state.flipped
    })
  }
  
  render() {
    return (
      <Card>
        <div onClick={this.toggleImage}>
          <div className="image">
            <img src={this.state.flipped ? this.props.pokemonInfo.sprites.back : this.props.pokemonInfo.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonInfo.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.pokeHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
