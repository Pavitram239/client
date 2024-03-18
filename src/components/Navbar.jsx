import Navlinks from './Navlinks';
import logo from '../assets/logo.svg';
import './Navbar.css';
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <Navlinks />
        <button>book now</button>
      </nav>
    </header>
  );
};
export default Navbar;
