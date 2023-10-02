import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function RoutesList() {
  return (
    <Routes>
      <Route path='/dogs' element={<DogList />} />
      <Route path='/dogs/:name' element={<DogDetails />} />
      <Route path='*' element={<DogList />} />
    </Routes>
  );
}

export default RoutesList;