import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";

const MainNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">Dusforty</div>
        <ul className="navbar__list">
          <li className="navbar__lister">Home</li>
          <li className="navbar__lister">About Us</li>
          <li className="navbar__lister">Properties</li>
          <li className="navbar__lister">Construction</li>
          <li className="navbar__lister">Gallery</li>
        </ul>
        <div className="navbar__actions">
          <button className="navbar__button">Contact Us</button>
          <button className="navbar__button">Login</button>
        </div>
        <button
          className="navbar__hamburger-icon"
          onClick={() => setOpen((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {open && <SideBar />}
    </>
  );
};

export default MainNavigation;
