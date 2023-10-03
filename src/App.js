import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';
import DogList from './DogList';
import fetchDogs from './utils.js';

function App() {
  const [dogList, setDogList] = useState(null);
  const [isListDisplayed, setIsListDisplayed] = useState(false);



  async function controller() {
    const dogs = await assignDogList();
    setIsListDisplayed(state => true);

    return dogs;
  }

  async function assignDogList() {
    return await fetchDogs();
  }

  return dogList;


  let dogs;
  if (dogList === undefined) {
    dogs = controller(dogList);
  } else {
    dogs = dogList;
  }

  console.log("dogList 2", dogs);

  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>

      {!isListDisplayed
        ? <h1>Loading...</h1>
        : <DogList dogList={dogList} />}
    </div>
  );
}

export default App;
