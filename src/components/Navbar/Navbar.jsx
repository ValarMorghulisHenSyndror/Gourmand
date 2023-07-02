import {GiHamburgerMenu} from 'react-icons/gi';
/* import {MdOutlineRestaurnatMenu} from 'react-icons/md'; */
import images from '../../constants/images'; 
import "./Navbar.css";

console.log(GiHamburgerMenu);   
const Navbar = () => (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.gourmand} alt="Noma-Logo" />
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans"> <a href="#home"> Home </a> </li>
            <li className="p__opensans"> <a href="#about"> About </a> </li>
            <li className="p__opensans"> <a href="#menu"> Menu </a> </li>
            <li className="p__opensans"> <a href="#awards"> Awards </a> </li>
            <li className="p__opensans"> <a href="#contact"> Contact </a> </li>
        </ul>

    </nav>
);

export default Navbar;
