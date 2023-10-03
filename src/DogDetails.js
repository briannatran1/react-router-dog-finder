import React from "react";
import { Link, Navigate } from "react-router-dom";
import Nav from "./Nav";

/**
 * DogDetails
 *
 * state: none
 *
 * props:
  * dog: {name, src}
 *
 *
  * FilterDogDetails -> DogDetails
 *
 */

function DogDetails({ dog }) {

  if (!dog) {
    return <Navigate to='/dogs' />;
  }

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <h2>{dog.age}</h2>
      <img
        src={`/${dog.src}.jpg`}
        alt={dog.name}>
      </img>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <Link to='/dogs'>Go Back</Link>
    </div>
  );
}

export default DogDetails;