import React from "react";

const MainNavigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Dusforty</div>
      <ul className="navbar__list">
        <li>Home</li>
        <li>About Us</li>
        <li>Properties</li>
        <li>Construction</li>
        <li>Gallery</li>
      </ul>
      <div className="navbar__actions">
        <button className="navbar__button">Contact Us</button>
        <button className="navbar__button">Login</button>
      </div>
    </nav>
  );
};

export default MainNavigation;
