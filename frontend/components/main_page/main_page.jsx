import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container';

class MainPage extends React.Component {

  render() {

    return (
      <>
      <GreetingContainer />
      <header>
        <h1>Change the way cooking is valued</h1>
        <p>Let your most passionate diners support your culinary creations
        via monthly membership
        </p>
      </header>
      
      <div className="login-signup">
        <Link to="/signup">Get started</Link>
      </div>
      </>
    )
  }
}
  
export default MainPage;