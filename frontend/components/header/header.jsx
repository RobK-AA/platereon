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
                      style={
                        this.props.currentUser.profile_photo
                          ? {
                              backgroundImage: `url(${this.props.currentUser.profile_photo})`,
                            }
                          : {
                              backgroundImage: `url("https://c8.patreon.com/2/200/c5055377")`,
                            }
                      }
                      // src="https://c8.patreon.com/2/200/7025471"
                    ></button>

                    <div className="list-container">
                      <ul className="user-nav-list">
                        <Link to="/createform">
                          <li
                            className="header-menu-creator"
                            key="user-nav-list1"
                          >
                            Become a Creator
                          </li>
                        </Link>

                        <Link to="/profile">
                          <li
                            className="header-menu-profile"
                            key="user-nav-list2"
                          >
                            My Profile
                          </li>
                        </Link>

                        <Link to="/" onClick={logout}>
                          <li
                            className="header-menu-logout"
                            key="user-nav-list3"
                          >
                            Log out
                          </li>
                        </Link>
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