import React from "react";
import "./header.styles.css";
import ProfileImage from "../../assets/Profile.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

class Header extends React.Component {
  state = {
    clicked: false,
  };

  handleIconClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="Header">
        <nav className="navbar">
          <div className="headerTitleWrapper">
            <p className="title">Priority Pulse</p>
          </div>
          <div className="burger" onClick={this.handleIconClick}>
            {this.state.clicked ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
          <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
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
    );
  }
}

export default Header;
