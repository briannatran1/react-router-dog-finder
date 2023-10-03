
/** makes call to API to get dog info */
async function fetchDogs() {
  const response = await fetch("http://localhost:5001/dogs");
  const dogs = await response.json();

}

export default fetchDogs;