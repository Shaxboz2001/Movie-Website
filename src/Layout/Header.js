import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <nav className="nav_bar">
          <h1>Creative Movie app</h1>
          <ul className="nav_links">
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Log out</a>
            </li>
          </ul>
        </nav>
        <div className="main_head">
          <img
            src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png"
            alt=""
          />
        </div>
      </header>
    );
  }
}

export default Header;
