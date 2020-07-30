import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container';
import DemoContainer from '../demo/demo_container';
import Demo from '../demo/demo';

class MainPage extends React.Component {

  render() {

    return (
      <div className='main'>
        <div className='main-text'>
          <div>
            <h1 className="change-header">Change the way cooking is valued</h1>
            <p>Let your most passionate diners support your culinary creations
            via monthly membership
            </p>
          </div>
          <div className="login-signup">
            <div className="get-started">
              <Link to="/signup">Get started</Link>
            </div>
            <DemoContainer />
          </div>
        </div>
        <div className="main-video"></div>
      </div>
    )
  }
}
  
export default MainPage;