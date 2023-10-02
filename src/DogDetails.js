import { useParams } from 'react-router-dom';

function DogDetails({ dog }) {
  const { name } = useParams();

  return (
    <>
      <h1>{name}</h1>
      <ul>

      </ul>
    </>
  );
}

export default DogDetails;