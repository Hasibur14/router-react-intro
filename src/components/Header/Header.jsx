import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <h2>Navbar</h2>
                {/* <Link to='/'>Home</Link> */}
                <NavLink to='/'></NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/todus'>Todus</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;