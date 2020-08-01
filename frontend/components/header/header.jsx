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
        <div>
          <nav className='NavBar'>
            <a href='/'>
              <img src={window.platereonlogoimg} /> </a>
            <div className="signed-in-user-nav">
              
              <div className="current-user-menu">
                {currentUser.name}'s Logo
                  <ul>
                    <li><Link className="header-menu-creator" to="/createform" >
                    Become a Creator</Link></li>
                    <li><Link className="header-menu-logout" to="/" onClick={logout}>
                    Log out</Link></li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
      )

      :

      (
        <div>
          <nav className='NavBar'>
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
        </div>
      )
  }
}

export default Header;