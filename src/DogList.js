import DogDetails from "./DogDetails";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import fetchDogs from "./utils";
import { useState } from "react";


function DogList() {
  // TODO: Declare state, move fetchdogs back to this function/component
  const [list, setList] = useState(false);

  const dogs = fetchDogs();
  console.log("DOGS", dogs, typeof dogs);

  // Takes array of Dog objects
  // Loops through and makes <DogDetails /> for each, passing the dog as a prop and constructing the path dynamically based on name.

  // Pair async with setting state.
  // Is there a way to make 1 API call, hold onto it, then manipulate the data that we get back.

  return (
    <>
      {dogs.map(dog => {
        <>
      <DogDetails dog={dog} />
      <p><Link to={dog.name} >See this dog</Link></p>;
        </>
      })}
    </>
  );


}

export default DogList;