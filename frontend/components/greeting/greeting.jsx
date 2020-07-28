import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';
const Greeting = ({ currentUser, logout }) => {



  const sessionLinks = () => (

    <nav className="login-signup">
      <Link to="/signup">Get started</Link>
      {/* <SessionForm /> */}
      {/* <p>New to Plate-reon?</p>
      <Link to="/signup">Sign up</Link> */}
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