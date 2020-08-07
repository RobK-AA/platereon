import React from 'react';
import { Link } from 'react-router-dom'
import DemoContainer from '../demo/demo_container';
import Demo from '../demo/demo';

class MainPage extends React.Component {

  render() {

    return (
      <div className="outer-main">
        <div className="outer-main-2">
          <div className="outer-main-3">
            <div className="outer-main-4">
              <div className="outer-main-5">
                <div className="outer-main-6">
                    <div className='main-text1'>
                      <div className='main-text2'>
                        <div className='main-text3'>
                            <div className="main-header-container">
                              <h1 className="main-header">Change the way food is valued</h1>
                            </div>
                            <div className="main-description-container">
                              <span className="main-description">Let your most passionate diners support your culinary creations
                              via monthly membership
                              </span>
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
                      </div>
                    </div>
                    <div className="main-video1" >
                      <div className="main-video2" >
                        <div className="main-video3" >
                          <div className="main-video4" >
                            <div className="food-video">
                              <img src='https://media.giphy.com/media/3oEjHC7al4GfnudR7y/giphy.gif' />
                                <div className="inner-video">
                                </div>
                            </div>
                          </div>
                        </div>
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
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
  
export default MainPage;