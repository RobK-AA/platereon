import React from 'react';
import { Link } from 'react-router-dom'
import DemoContainer from '../demo/demo_container';
import SplashSearch from '../search/splash_search'
import SearchContainer from '../search/nav_search';
import Demo from '../demo/demo';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    
    return (
      <div className="outer-main">
        <div className="outer-main-2">
          <div className="outer-main-3">
            <div className="outer-main-4">
              <div className="outer-main-5">
                <div className="outer-main-6">
                  <div className="main-text1">
                    <div className="main-text2">
                      <div className="main-text3">
                        <div className="main-header-container">
                          <h1 className="main-header">
                            Change the way food is valued
                          </h1>
                        </div>
                        <div className="main-description-container">
                          <span className="main-description">
                            Let your most passionate diners support your
                            culinary creations via monthly membership
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
                  <div className="main-video1">
                    <div className="main-video2">
                      <div className="main-video3">
                        <div className="main-video4">
                          <div className="food-video">
                            <div className="inner-video1">
                              <div className="inner-video">
                                <img src="https://media.giphy.com/media/3oEjHC7al4GfnudR7y/giphy.gif" />
                                <svg
                                  width="100%"
                                  height="100%"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="38.5"
                                    cy="38.5"
                                    r="38.5"
                                    data-fill="1"
                                  ></circle>
                                  <path
                                    d="M29.5 26.917L53.25 38 29.5 49.083V26.917z"
                                    data-stroke="1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SplashSearch />
            {/* <div className="search-main4">
              <div className="search-main3">
                <div className="search-main2">
                  <div className="search-main1">
                    <div className="search-main-title5">
                      <div className="search-main-title4">
                        <div className="search-main-title3">
                          <div className="search-main-title2">
                            <div className="search-main-title1">
                              <h2 className="search-title-text">
                                Search the creators on Platereon
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="search-main-inner4">
                      <div className="search-main-inner3">
                        <div className="search-main-inner2">
                          <div className="search-main-inner1">
                            <SearchContainer />
                            <div className="search-main-button">
                              <Link id="main-page-search-button">
                                <div className="search-main-button1"></div>
                                <div className="search-main-button2">
                                  Search
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="mid-main1">
              <div className="mid-main2">
                <div className="mid-main3">
                  <div className="mid-main4">
                    <div className="title-mid1">
                      <div className="title-mid2">
                        <div className="title-mid3">
                          <div className="title-mid4">
                            <div className="title-mid5">
                              <h3 className="title">What's Platereon?</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-desc1">
                    <div className="main-desc2">
                      <div className="main-desc3">
                        <div className="main-desc4">
                          <div className="main-desc5">
                            <div className="main-desc6">
                              <div className="main-desc7">
                                <div className="main-desc8">
                                  <div className="main-desc9">
                                    On Platereon, you can let your fans become
                                    active participants in the food they love by
                                    offering them a monthly membership. You give
                                    them access to exclusive content, community,
                                    and insight into your culinary process. In
                                    exchange, you get the freedom to create your
                                    most delicious meals, and the stability you
                                    need to build an independent creative
                                    career.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-footer1">
              <div className="outer-footer2">
                <div className="outer-footer3">
                  <div className="outer-footer4">
                    <div className="footer-1">
                      <div className="footer1">
                        <div className="footer1-div">
                          <div className="footer1-div2">
                            <img
                              className="platereon-logo"
                              src="https://images.ctfassets.net/tfws0ki30xlo/5sTKkW3wiqoJVTK6KZreMb/2e2537c00ecb82d7eb074da3a435f720/2020-GTM-Blog-FightingForJustice-V2.jpg?w=767&h=431&q=90&fit=thumb&f=top"
                              alt="Twitter"
                            />

                            <div></div>
                          </div>
                        </div>
                      </div>
                      <div className="footer2">
                        <div className="footer22">
                          <div className="footer23">
                            <div className="footer24">
                              <div className="footer25">
                                <div className="twit">
                                  <div className="twit2">
                                    <div className="twit3">
                                      <img
                                        src="https://www.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-256.png"
                                        alt="Facebook"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="face">
                                  <div className="face2">
                                    <div className="face3">
                                      <img
                                        src="https://www.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-256.png"
                                        alt="Instagram"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="insta">
                                  <div className="insta2">
                                    <div className="insta3">
                                      <img
                                        src="https://www.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-256.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer3">
                        <div className="footer31">
                          <div className="footer32">
                            <ul className="footer-ul1">
                              <li className="footer-ul10">FOR CREATORS</li>
                              <div className="footer-ul111">
                                <a
                                  target="_blank"
                                  href="https://robk-aa.github.io/"
                                >
                                  <li className="footer-ul11">About</li>
                                </a>
                              </div>
                              <div className="footer-ul112">
                                <a
                                  target="_blank"
                                  href="https://github.com/RobK-AA"
                                >
                                  <li className="footer-ul12">GitHub</li>
                                </a>
                              </div>
                              <div className="footer-ul113">
                                <a
                                  target="_blank"
                                  href="https://www.linkedin.com/in/robert-kornblum-1b851b1a2/"
                                >
                                  <li className="footer-ul13">LinkedIn</li>
                                </a>
                              </div>
                              <div className="footer-ul114">
                                <a
                                  target="_blank"
                                  href="https://angel.co/u/robert-kornblum-2"
                                >
                                  <li className="footer-ul14">AngelList</li>
                                </a>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="footer4">
                          <div className="footer5">
                            <div className="footer6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default MainPage;