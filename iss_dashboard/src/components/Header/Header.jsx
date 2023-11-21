import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <>
        <div>
                hii
            </div>
        <header className="header">
            
            <Link className="header_link" to="/">
                <h1 className='header_title'>INTERNATIONAL SPACE STATION</h1>
            </Link>
            
        </header>
        </>
    );
}

export default Header;

