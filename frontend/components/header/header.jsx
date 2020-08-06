import React from 'react';
import { Link } from 'react-router-dom'
import {router} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentUser, logout, location } = this.props;

    return currentUser ?
      (
      
        <div className='NavBar'>
          <header>
            <nav className='NavBar-nav'>
              <Link to='/'>
                <img src={window.platereonlogoimg} /> </Link>
              <div className="signed-in-user-nav">
                
                  <div className="current-user-menu">
                    <div className="logo-container">
                      <button className="user-logo" src="https://c8.patreon.com/2/200/7025471" ></button>
                    
                      {/* {currentUser.name}'s Logo */}
                      <div className="list-container">
                        <ul className="user-nav-list">
                          <li><Link className="header-menu-creator" to="/createform" >
                          Become a Creator</Link></li>
                          <li><Link className="header-menu-logout" to="/" onClick={logout}>
                          Log out</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                
              </div>
            </nav>
          </header>
        </div>
      )

      :

      (
        <div className='NavBar'>
          <header>
            <nav className='NavBar-nav'>
              <a href='/'>
                <img src={window.platereonlogoimg} /> </a>

              {(location.pathname === "/login") || (location.pathname === "/signup") ?
                null :
              <div className="NavBar-login-signup">
                <Link className="header-login" to="/login">Log in</Link> 
                <Link className="header-signup" to="/signup">Create on Platereon</Link>
              </div>
              }
            </nav>
          </header>
        </div>
      )
  }
}

export default Header;