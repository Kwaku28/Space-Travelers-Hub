/*eslint-disable*/
import { useSelector } from 'react-redux';
import Navbar from '../navbar';

const MyProfile = () => {
  const rockets = useSelector((state)=>(state.rockets.rockets))
  return (
    <>
      <Navbar />
      <section className='MyprofileContainer'>
        <div className="RocketProfile">
        <h1 className="MyRocket">My Rockets</h1>
      <ul className='RocketUl'>
      {
        rockets
        .filter((element) => element.rocketStatus)
        .map((rocket)=>(
          <li className='RocketNames' key={rocket.id}>{rocket.RocketName}</li>
          ))
        }
        </ul>
        </div>
      </section>
    </>
 
  );
};

export default MyProfile;
