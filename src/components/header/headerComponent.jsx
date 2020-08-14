import React from "react";
import "./header.styles.css";
import ProfileImage from "../../assets/Profile.png";

const Header = () => (
  <div className="Header">
    <div className="headerTitleWrapper">
      <p className="title">Priority Pulse</p>
    </div>
    <div className="navWrapper">
      <nav className="navbar">
        <ul className="navList">
          <li className="navListItem Home" key="1">
            <a href="/home">Home</a>
          </li>
          <li className="navListItem" key="2">
            <a href="/activerides">Active Rides</a>
          </li>
          <li className="navListItem" key="3">
            <a href="/profile">Profile</a>
          </li>
          <li className="navListItem" key="4">
            <a href="/logout">Logout</a>
          </li>
          <li className="navListItem" key="5">
            <img
              src={ProfileImage}
              className="ProfileImage"
              alt="profileImage"
            />
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
