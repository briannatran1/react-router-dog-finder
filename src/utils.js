

async function fetchDogs() {

  const response = await fetch("http://localhost:5001/dogs");
  const dogs = await response.json();

  console.log("dogs from util", dogs, typeof dogs);

  // const dogs = [{1:1}, {2:2}];

  return dogs;
}

export default fetchDogs;