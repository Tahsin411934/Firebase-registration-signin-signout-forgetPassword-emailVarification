import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="mx-auto w-72 flex gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    );
};

export default Header;