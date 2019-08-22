import React from 'react';
import { Route } from 'react-router-dom'
import DogBreedImages from './DogBreedImages'
import DogBreedImagesContainer from './DogBreedImagesContainer'
import './App.css';
import DogsListContainer from './DogsListContainer'
function App() {
  return (
    
    <main>
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
    </main>
  );
}

export default App;
