import DogDetails from "./DogDetails";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";


function DogList({ dogList }) {
  console.log("dogList", dogList);

  return (
    <>
      {dogList.map(dog => {
        <>
          <DogDetails dog={dog} />
          <p><Link to={dog.name} >See this dog</Link></p>;
        </>;
      })}

    </>
  );

  // fetchDogs();

}

export default DogList;