import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservation</Link>
          </li>
          <li>
            <Link to="/order">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
