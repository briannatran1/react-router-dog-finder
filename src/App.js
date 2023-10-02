import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';

function App() {
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
      <DogList />
    </div>
  );
}

export default App;
