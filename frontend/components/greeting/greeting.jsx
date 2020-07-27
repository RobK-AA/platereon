import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log in</Link>
      <SessionForm />
      <p>New to Plate-reon?</p>
      <Link to="/signup">Sign up</Link>
    </nav>
  );

  const personalGreeting = () => (
    <div>
      <h2 className="header-name">{currentUser.username}</h2>
      <ul>
        <li>
          <button className="header-button" onClick={logout}>Log Out</button>
        </li>
      </ul>
      
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;