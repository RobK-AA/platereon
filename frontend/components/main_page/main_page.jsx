import React from 'react';
import { Link } from 'react-router-dom'
import DemoContainer from '../demo/demo_container';
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
                            <img src="https://media.giphy.com/media/3oEjHC7al4GfnudR7y/giphy.gif" />
                            <div className="inner-video"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-main4">
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
            </div>
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
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEUAAAD////6+vrX19c3NzdxcXFUVFRsbGyYmJgXFxe6urrd3d2Kioo9PT0dHR0ZGRknJyfz8/MICAiEhIRfX19aWlqrq6uysrLp6enBwcFKSkrPz8/IyMgPDw9mZmagoKB5eXkuLi4WL1DUAAAEzUlEQVRogc2bZ9uqMAyGw1ZApA6mKO///5OHqQgdKRR7nq969aYrTZMUDHmRIE9Cx7Wj6gKXKrJdJ0zygKxoCSTBVurEZ6DpHDupJfkJMvTM904VlTyqOnl+tgedpF7MJY+KvRQ9Aki6daUPN13Hq6WObvquBLqX65tK6KZvS7Nb2Qi+iG7mxSp2q0LIF9CD22p2q1uwhR5uYrcKV9Mfl83wxgQ8VtHNqwJ2qyt79pn04KQIDnBizj6Lnh+VwRvrk8vRDwrZrQ4SdNNRDAdwqJNPo5vyhlUsl4an0Ml9BzjAnXLyLek7wan4Bd3cC97gF4O/oO8x56NcEV39ap/K4dNV7/O5Djx6vjMcIGfTA5Xmla5jwKKb6g4Wtk4mg67qSOXrSqc/fgIHeFDpKjwZjCoafbsPh1W4pAc/gwMEc7q5zXWW082c0f0fwgH8b7q5/sayRoX5Rf9t19+d7+nmuovietnmhP7rro+d7+l7uhR0FR+6paTBS8UP6nzLetMVHC+nwyPIgjJBm43rSCcy30zV/XNqk3dXooS3jSsy0FNh65HH+7Xyjamszk24J0bJbTMd6NymO9VGzf7xrzS+RW63V2CK1rLX0zNxHK7kNTWHj3rx24yzji7e7DbhXO4SBrxzVng+g9/RxQP/7Jqr6V/GgDeL6Z5yu++1dCL2JWvOUPp0uB/mxLC4m+lEGjr/L51GZ6RcrpCYE5IL+KdHZTV08X4b+94s0MUseWx4JhrUtKGLp32Y934tzZp8MeFEuJWcho6Ie9vTm3f6xWdMO8o/jw0gmND395bOn59fWNGoLBK3eiaA8mXrWdtBch+GLN1ABwtQ19ZqGe3PHoenHbFCYTi6DwmGDncWhJWFCTA3owSQV5grg8ISymEJARMqqesjHDCZjo/4p+sgBzAu3cHI/Jq1vuhC2DBo2Bhfer7kEUJNqA2YtXmSz3Ki/LsIUD4dMr32UfaHabbinv9vSQ89atHh2ABH2c4LvCpJ/iLGKRDuSnzBzbustUEGQirUmpfGIwOuEWq/dxLlFadCDqiNsnW9jldsdQM23Oui7Hyr87OwixfO2GN75GDPOAC8vUNHukPk+Q6ifO5E+GBzgvNtOmEtDtbSNE4hzq/rVODGPsBXaAQ4n7bXE7Xm8DmtxqfF+POjCgReIrMT4+4yHyUivkzszcHd4yb6e5WEM/9S0a8Ud4f9VsQuJrAkprG/wyLu799iGzwL5dGM6u7vchMPNbuKq5QbRQ8Zt3krPnAqyNBWc5CPilkN3k/khg/OestkM7hDzEo09G7qJ2leZtzNJl+MNcTrhHvOZUXk3gqegiYoGmOV4jitywoS9Oxang3HMU6LiVFXCcOxIsm67O07Ro2zUJfiNV91xEpuMjWHU33i82hXyHbrV15allU+/Fd9t9cnTye5Cc15Gb05Kb35OM25yB/Ue0w1mo//IwetN/+uufYAffHcLGrdheaaE731NpprjfTWWWmuMdNcX6e5tnCfWtpRwrpKzTWleutpNdcSa66jNvZY+fPVzqNrrZ83NL8d0PxuQvObkUYPFd7OyvcyrXS+FTI0v5Pa+EYs3/hGzND7Pq7n63sb2EnuXeRZ5bvITjrfhHbS+B62F7GaIdDzFvj9CcreQf8DIOI9qO84jv0AAAAASUVORK5CYII="
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="face">
                                  <div className="face2">
                                    <div className="face3">
                                      <img
                                        src="https://toppng.com/uploads/preview/facebook-logo-black-11549681824hmcxyqtxds.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="insta">
                                  <div className="insta2">
                                    <div className="insta3">
                                      <img
                                        src="https://toppng.com/uploads/preview/black-instagram-logo-11549505060y8xxtph5nz.png"
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
                              <li className="footer-ul11">About</li>
                              <li className="footer-ul12">GitHub</li>
                              <li className="footer-ul13">LinkedIn</li>
                              <li className="footer-ul14">App Academy</li>
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