import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class DogsList extends Component {
  
  renderDogBreed(breed){
    return <li key = {breed}>
          <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
          </li>
  }
  render() {
    const {dogBreeds} = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        { !dogBreeds && 'Loading...' }

          {
            dogBreeds &&
            <ul>{ dogBreeds.map(breed => this.renderDogBreed(breed))}</ul>
          }
          

        {/* { this.state.dogBreeds === null && 'Loading...' }  */}
        {/*<ul>
        { this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>) }
        </ul>  */}
      </div>
    )
  }
}