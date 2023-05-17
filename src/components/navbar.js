import { Link } from 'react-router-dom';
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
          <Link to="/">Rocket</Link>
        </li>
        <li>
          <Link to="/mission">Mission</Link>
        </li>
        <li>
          <Link to="/MyProfile">MyProfile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
