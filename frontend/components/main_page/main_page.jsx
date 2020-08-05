import React from 'react';
import { Link } from 'react-router-dom'
import DemoContainer from '../demo/demo_container';
import Demo from '../demo/demo';

class MainPage extends React.Component {

  render() {

    

    return (
      <div className="outer-main">
        <div className='main'>
          <div className='main-text'>
            <div>
              <h1 className="main-header">Change the way food is valued</h1>
              <p className="main-description">Let your most passionate diners support your culinary creations
              via monthly membership
              </p>
            </div>
            <div className="login-signup">
              <div className="get-started">
                <Link to="/signup">Get started</Link>
              </div>
              <div className="demo-button">
                <DemoContainer />
              </div>
            </div>
          </div>
          <div className="main-video" >
            {/* <button data-test='video' className="video-button"> */}
              <div className="food-video">
                <img src='https://media.giphy.com/media/3oEjHC7al4GfnudR7y/giphy.gif' />
                {/* <svg width="100%" height="100%" fill="none" >
                  <circle cx="38.5" cy="38.5" r="38.5" data-fill='1'></circle>
                  <path d="M29.5 26.917L53.25 38 29.5 49.083V26.917z" data-stroke="1"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </svg> */}
                <div className="inner-video">
                  <span>
                    
                      
                  </span>
                </div>
              </div>
              <div>
                
              </div>
            {/* </button> */}
          </div>
        </div>
          <div className="mid-main">
             <div className="title-mid-main">
              <div className="title-mid">
               <h3 className="title">What's Platereon?</h3>
              </div> 
            </div>
              </div> 
          <div className="outer-footer">

          </div> 
      </div>
    )
  }
}
  
export default MainPage;