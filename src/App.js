import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Nav from './Nav';

/** App
 *
 * Props: none
 *
 * State:
 * - dogs: [{name...}]
 * - isLoading: boolean
 *
 * App -> Routelist
 */

function App() {
  // const [dogs, setDogs] = useState({
  //   data: null,
  //   isLoading: true
  // })

  const [dogList, setDogList] = useState(null);
  const [isListDisplayed, setIsListDisplayed] = useState(false);

  /** makes call to API to get dog info */
  async function fetchDogs() {
    const response = await fetch("http://localhost:5001/dogs");

    setDogList(response.data);
    setIsListDisplayed(true);
  }

  if (isListDisplayed) {
    fetchDogs();
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <BrowserRouter>
        <Nav dogs={dogList} />
        <RoutesList dogs={dogList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
