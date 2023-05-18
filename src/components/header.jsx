import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        Book'<span>Ocean</span>
      </h1>
      <div>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/books">Books</NavLink>
      </div>
    </header>
  );
};

export default Header;

/* Second Option
 <NavLink to="/" classname={({ isActive }) => isActive && "aktif"}> */

/* Third Option
 <NavLink to="/books" style={({ isActive}) => ({ color: isActive ? 'blue' : 'red'})}> */
