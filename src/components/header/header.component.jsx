import React from "react";

import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Nav item 1</a>
          </li>
          <li>
            <a href="/">Nav item 2</a>
          </li>
          <li>
            <a href="/">Nav item 3</a>
          </li>
          <li>
            <a href="/">Nav item 4</a>
          </li>
          <li>
            <a href="/">Nav item 5</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
