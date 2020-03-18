import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addPoke(this.state)
  }

  addName=(e)=>{
    this.setState({
      name: e.target.value
    })
  }

  addHp=(e)=>{
    this.setState({
      hp: e.target.value
    })
  }

  addFront=(e)=>{
    this.setState({
      frontUrl: e.target.value
    })
  }

  addBack=(e)=>{
    this.setState({
      backUrl: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.addName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.addHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.addFront} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.addBack} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
