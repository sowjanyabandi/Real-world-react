import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
 
  console.log('DogBreedImages props test:', props)
  const {images, x} = props

  return (
    <div className="dog-breed-images">
    <h1>Dogs Breed Images 
        This page will show images of { x } breed.
    </h1>
      <Link to="/">Go back to the index</Link>
      <div>
      { images && images.map(url => <img src={ url } alt="Dog" />) }
      { !images && 'Loading...' }
      </div>

    </div>
  )
}