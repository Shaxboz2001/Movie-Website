import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="main_footer">
          <img
            src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png"
            alt=""
          />
        </div>
        <footer className="footer">
          <div className="footer_copyright">
            <div className="container">
              <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
