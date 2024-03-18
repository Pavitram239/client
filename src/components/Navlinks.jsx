import { navLinks } from '../utils/links';
import './Navlinks.css';
const Navlinks = () => {
  return (
    <ul className="nav-links">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default Navlinks;
