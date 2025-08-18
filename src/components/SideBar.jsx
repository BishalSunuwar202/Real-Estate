import React from "react";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__lister">Home</li>
        <li className="sidebar__lister">About Us</li>
        <li className="sidebar__lister">Properties</li>
        <li className="sidebar__lister">Construction</li>
        <li className="sidebar__lister">Gallery</li>
        {/* <li className="sidebar__contact">Contact Us</li>
        <li className="sidebar__login">Login</li> */}
      </ul>
      <div className="sidebar__actions">
        <button className="sidebar__button">Contact Us</button>
        <button className="sidebar__button">Login</button>
      </div>
    </nav>
  );
};

export default SideBar;
