import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import ls from 'local-storage'


class Community extends React.Component {

  
  constructor(props) {
    
    super(props);
    const name = this.props.community.name || "";
    const description = this.props.community.description || "";
    const shortDesc = this.props.community.short_description || "";
    const goldPerks = this.props.community.gold_perks || "";
    const silverPerks = this.props.community.silver_perks || "";
    const bronzePerks = this.props.community.bronze_perks || "";
    const isPlural = this.props.community.plural || "";
    const creatorId = this.props.community.creator_id || "";

    this.state = {
      name,
      description,
      shortDesc,
      goldPerks,
      silverPerks,
      bronzePerks,
      isPlural,
      creatorId
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.setState({
  //       prevState
  //     })
  //   }
  // }

  componentDidMount() {
    
    this.props.fetchCommunity(this.props.match.params.communityId)
  };

  render() {
    
    const { name, 
            description, 
            shortDesc, 
            goldPerks, 
            bronzePerks, 
            silverPerks,
            isPlural
    } = this.state
   
    return(
      <div className="community-body-outer">
        <div className="community-body-mid">
          <div className="community-body-inner">
            <div className="community-banner">
              <div className="community-banner-top">
                <div className="creator-logo-outer">
                  <div className="creator-logo">
                  </div>
                </div>
              </div>
            </div>
            <div className="community-main-outer">
              <div className="community-main">
                  <div className="creator-title">
                    <div className="creator-title-inner">
                      <h1 className="creator-title-text">{name}</h1>
                        {
                        isPlural ?
                        <span className="community-short-desc">{`are creating ${shortDesc}`}</span>
                        :
                        <span className= "community-short-desc">{`is creating ${shortDesc}`}</span>
                        }
                    </div>
                  </div>
                  <div className="perks-outer">
                    <div className="perks-title">
                      <h2 className="perks-title-text">Select a membership level</h2>
                    </div>
                    <div className="perks-container">
                        <div className="perks">
                          <div className="bronze-container">
                            <div className="bronze5">
                              <div className="bronze4">
                                <div className="bronze3">
                                  <div className="bronze2">
                                    <div className="bronze1">
                                      <div className="bronze-banner">
                                        <div className="bronze-title">Bronze
                                        <div className="bronze-img-container">
                                          <img className="bronze-img" src="https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/3632132/b46d56d576804170ade9a76bcceced80/4.png?token-time=2145916800&token-hash=AweIqi9rAC797oEvwqaHIL73pzukFXWAUF7gxLRx7zw%3D" />
                                        </div>
                                        </div>
                                      </div>
                                      <div className="bronze-amt-container">
                                        <div className="bronze-amt">$3
                                        <div className="bronze-per">
                                          per month
                                        </div>
                                          <div className="bronze-waived">
                                            (Waived for Demo Users!)
                                          </div>
                                        </div>
                                      </div>
                                      <div className="join-container">
                                        <div className="join4">
                                          <div className="join3">
                                            <div className="join2">
                                              <div className="join-text">
                                                Join
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bronze-desc3">
                                        <div className="bronze-desc2">
                                          <div className="bronze-desc1">
                                            <div>This tier gives you:</div>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <div>{bronzePerks}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="silver-container">
                            <div className="silver5">
                              <div className="silver4">
                                <div className="silver3">
                                  <div className="silver2">
                                    <div className="silver1">
                                      <div className="silver-banner">
                                        <div className="silver-title">Silver
                                        <div className="silver-img-container">
                                      <img className="silver-img" src="https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/3632635/7fcf0f4750494a8b9544765884915b33/2.png?token-time=2145916800&token-hash=FdROyIqYsl_blfA6ZF-rvp3A7IoqQerOiyQgwjXkYO8%3D" />
                                      </div>
                                        </div>
                                      </div>
                                      <div className="silver-amt-container">
                                        <div className="silver-amt">$5
                                        <div className="silver-per">
                                          per month
                                        </div>
                                          <div className="silver-waived">
                                            (Waived for Demo Users!)
                                          </div>
                                        </div>
                                      </div>
                                      <div className="join-container">
                                        <div className="join4">
                                          <div className="join3">
                                            <div className="join2">
                                              <div className="join-text">
                                                Join
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="silver-desc3">
                                        <div className="silver-desc2">
                                          <div className="silver-desc1">
                                            <div>This tier gives you:</div>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <div>{silverPerks}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="gold-container">
                            <div className="gold5">
                              <div className="gold4">
                                <div className="gold3">
                                  <div className="gold2">
                                    <div className="gold1">
                                      <div className="gold-banner">
                                        <div className="gold-title">Gold
                                            <div className="gold-img-container">
                                      <img className="gold-img" src="https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/3632663/3b471375f8f943ca8b9596a5d0327072/2.png?token-time=2145916800&token-hash=4au40v64PmBTu-skbgQ__9SfOaHZzZmxH82ga2l-6xU%3D" />
                                      </div>
                                        </div>
                                      </div>
                                      <div className="gold-amt-container">
                                        <div className="gold-amt">$10
                                            <div className="gold-per">
                                            per month
                                            </div>
                                          <div className="gold-waived">
                                            (Waived for Demo Users!)
                                              </div>
                                        </div>
                                      </div>
                                      <div className="join-container">
                                        <div className="join4">
                                          <div className="join3">
                                            <div className="join2">
                                              <div className="join-text">
                                                Join
                                                  </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gold-desc3">
                                        <div className="gold-desc2">
                                          <div className="gold-desc1">
                                            <div>This tier gives you:</div>
                                            <br />
                                            <br />
                                            <br />
                                            <div>{goldPerks}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Community;