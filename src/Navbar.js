import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='nav-container'>
    <div className='nav'>
          <Link to="/">
            Home
          </Link>
          <Link to="/experience">
            Experience
          </Link>
          <Link to="/contact">
            Contact
          </Link>
      </div>
   </div>
  );
}