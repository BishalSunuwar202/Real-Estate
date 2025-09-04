import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";

const MainNavigation = () => {
  const [open, setOpen] = useState(false);
  const username = localStorage.getItem("username");
  console.log(username);
  const handleClick = async () => {
    const response = await axiosInstance.post("/auth/logout/");
    return response;
  };
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
          {!username ? (
            <>
              <button className="navbar__button">Contact Us</button>
              <Link to={"login"}>
                <button className="navbar__button">Login</button>
              </Link>
            </>
          ) : (
            <div>
              {username} <button onClick={handleClick}>logout</button>
            </div>
          )}
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
