import React from 'react';
import { Link } from 'react-router-dom';
import {router} from 'react-router-dom';
import NavSearch from '../search/nav_search';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser, logout, location } = this.props;

    return currentUser ? (
      <div className="header-div">
        <div className="NavBar">
          <header>
            <nav className="NavBar-nav">
              <Link to="/">
                <img src={window.platereonlogoimg} />{" "}
              </Link>
              <div className="signed-in-user-nav">
                <NavSearch />
                <div className="current-user-menu">
                  <div className="logo-container">
                    <button
                      className="user-logo"
                      src="https://c8.patreon.com/2/200/7025471"
                    ></button>

                    <div className="list-container">
                      <ul className="user-nav-list">
                        <li key="user-nav-list1">
                          <Link
                            className="header-menu-creator"
                            to="/createform"
                          >
                            Become a Creator
                          </Link>
                        </li>
                        <li key="user-nav-list1">
                          <Link
                            className="header-menu-creator"
                            to="/profile"
                          >
                            Edit Profile
                          </Link>
                        </li>
                        <li key="user-nav-list2">
                          <Link
                            className="header-menu-logout"
                            to="/"
                            onClick={logout}
                          >
                            Log out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    ) : (
      <div className="header-div">
        <div className="NavBar">
          <header>
            <nav className="NavBar-nav">
              <a href="/">
                <img src={window.platereonlogoimg} />{" "}
              </a>

              {location.pathname === "/login" ||
              location.pathname === "/signup" ? null : (
                <div className="NavBar-login-signup">
                  <NavSearch />
                  <Link className="header-login" to="/login">
                    Log in
                  </Link>
                  <Link className="header-signup" to="/signup">
                    Create on Platereon
                  </Link>
                </div>
              )}
            </nav>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;