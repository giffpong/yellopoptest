import React from 'react';
import '../styles/NavigateBarComponent.css';

function NavigateBarComponent() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <input
          type="image"
          src="./pillowcast.png"
          alt="Submit"
          width="180"
          height="80"
        />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Cast Out
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Upload Cast
                </a>
              </li>
            </ul>
            <img className="logo-profile" src="./img_avatar.png" alt="Avatar" />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavigateBarComponent;
