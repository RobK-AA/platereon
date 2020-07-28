import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ currentUser }) => {
  return (
    <div>
      <nav>
        <img src={"/assets/platereonIMGblack.png"} />
        <Link className="header-login" to="/login">Log in</Link>
        <Link className="header-signup" to="/signup">Create on Platereon</Link>
      </nav>
    </div>
  )
};

export default Header;