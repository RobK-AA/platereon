import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentUser, logout } = this.props;

  
    return currentUser ?
      (
        <div>
          <nav className='NavBar'>
            <a href='/'>
              <img src={"assets/platereonlogoimg.png"} /> </a>
            <Link className="header-logout" to="/" onClick={logout}>Log out</Link>
            {currentUser.email}
          </nav>
        </div>
      )

      :

      (
        <div>
          <nav className='NavBar'>
            <a href='/'>
              <img src={"assets/platereonlogoimg.png"} /> </a>
            <Link className="header-login" to="/login">Log in</Link>
             
            <Link className="header-signup" to="/signup">Create on Platereon</Link>
          </nav>
        </div>
      )
  }
}

export default Header;