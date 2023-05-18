import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <header>
    <div>
      <img className="planetImg" src={planet} alt="" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="link">Rocket</NavLink>
        </li>
        <li>
          <NavLink to="/mission" className="link">Mission</NavLink>
        </li>
        <li>
          <NavLink to="/MyProfile" className="link">MyProfile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
