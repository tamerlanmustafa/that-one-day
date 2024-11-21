import './Navbar.scss'
import { useState } from "react"
import MobileMenu from '../Mobile Menu/MobileMenu';
import { Link } from 'react-router-dom';





const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState); 
    };

    const handleCloseMenu = () => {
        setIsOpen(false); 
      };

    return <>
        <nav className="navbar">
            <Link to={'/'}>ThatOneDay</Link>

            <div id="hamburger" className={`bars ${isOpen ? 'open' : ''}`}   onClick={handleToggle}>
                <span id="bar1"></span>
                <span id="bar2"></span>
                <span id="bar3"></span>
            </div>
        </nav>
        
        <MobileMenu className={`${isOpen ? 'slide' : ''}`}  onLinkClick={handleCloseMenu}  />
    </>
}

export default NavBar