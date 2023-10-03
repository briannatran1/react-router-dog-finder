

async function fetchDogs() {

  const response = await fetch("http://localhost:5001/dogs");
  const dogs = await response.json();

  return dogs;

  /* Loops through and makes <DogDetails /> for each, passing the dog as a prop
  and constructing the path dynamically based on name.*/
}

export default fetchDogs;