import { useSelector } from 'react-redux';
import MissionProfile from '../activeMission';
import Navbar from '../navbar';

const MyProfile = () => {
  const rockets = useSelector((state) => (state.rockets.rockets));
  return (
    <>
      <Navbar />
      <section className="MyprofileContainer">
        <MissionProfile />
        <div className="RocketProfile">
          <h2 className="MyRocket">My Rockets</h2>
          <ul className="RocketUl">
            {
        rockets
          .filter((element) => element.rocketStatus)
          .map((rocket) => (
            <li className="RocketNames" key={rocket.id}>{rocket.RocketName}</li>
          ))
        }
          </ul>
        </div>
      </section>
    </>

  );
};

export default MyProfile;
