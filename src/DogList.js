import { Link } from 'react-router-dom';

/**
 * DogList
 *
 * state: none
 *
 * props:
  * dogs: [{name, src}]
 *
 * rendered at /dogs
 *
 */

function DogList({ dogList }) {
  return (
    <>
      <h2>CLICK ON DOGS FOR MORE INFO.</h2>
      {dogList.map(dog => (
        <div className="DogList" key={dog.name}>
          <img img
            src={`/${dog.src}.jpg`}
            alt={dog.name}>
          </img >
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
        </div>
      ))}
    </>
  );
}

export default DogList;