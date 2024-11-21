import { Link } from 'react-router-dom'
import '../Mobile Menu/MobileMenu.scss'


const MobileMenu = ({className, onLinkClick}) => {
    
    return (
        <>
            <div className={` mobile-menu ${className}`} >
                <Link to={'/'} onClick={onLinkClick}>Home</Link>
                <Link to={'/about'} onClick={onLinkClick}>About</Link>
                <Link to={'/contact'} onClick={onLinkClick}>Contact</Link>
            </div>
        
        </>
    )
}

export default MobileMenu