import DogDetails from "./DogDetails";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";


function DogList() {
  const [isListDisplayed, setIsListDisplayed] = useState(false);
  const [dogList, setDogList] = useState();

  async function fetchDogs() {
    let dogs;
    if (dogList) {
      dogs = dogList;
    }
    else {
      const response = await fetch("http://localhost:5001/dogs");
      dogs = await response.json();

      //updates state
      setIsListDisplayed(curr => !curr);
      setDogList(dogs);
    }

    console.log('dogs', dogs);

    /* Loops through and makes <DogDetails /> for each, passing the dog as a prop
    and constructing the path dynamically based on name.*/
    return (
      <>
        {dogs.map(dog => {
          <>
            <DogDetails dog={dog} />
            <p><Link to={dog.name} >See this dog</Link></p>;
          </>;
        })}

        {!isListDisplayed &&
          <h1>Loading...</h1>}
      </>
    );
  }

  const data = fetchDogs();
  console.log('data', data);

}

export default DogList;