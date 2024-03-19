import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <h2>Navbar</h2>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/users'>Users</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;