import React from 'react';
import PostsContainer from '../post/post_container'
import {BrowserRouter } from 'react-router-dom';
import ls from 'local-storage'
import PostFormContainer from '../post/post_form_container';
import PostsIndex from "../post/posts_index";

class Community extends React.Component {

  
  constructor(props) {
    super(props);
    // if (this.props.community) {
    //   this.name = this.props.community.name || "";
    //   this.description = this.props.community.description || "";
    //   this.shortDesc = this.props.community.short_description || "";
    //   this.goldPerks = this.props.community.gold_perks || "";
    //   this.silverPerks = this.props.community.silver_perks || "";
    //   this.bronzePerks = this.props.community.bronze_perks || "";
    //   this.isPlural = this.props.community.plural || "";
    //   this.creatorId = this.props.community.creator_id || "";
    //   this.id = this.props.community.id || "";
    // }
    
    this.name = this.props.community.name || "";
    this.description = this.props.community.description || "";
    this.shortDesc = this.props.community.short_description || "";
    this.goldPerks = this.props.community.gold_perks || "";
    this.silverPerks = this.props.community.silver_perks || "";
    this.bronzePerks = this.props.community.bronze_perks || "";
    this.isPlural = this.props.community.plural || "";
    this.creatorId = this.props.community.creator_id || "";
    this.backgroundImage = this.props.community.background_image;
    this.id = this.props.community.id || "";
    this.currentUser = this.props.currentUser;
    this.joinCommunity = this.props.joinCommunity.bind(this);
    this.unjoinCommunity = this.props.unjoinCommunity.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
    this.handleUnjoin = this.handleUnjoin.bind(this);
    this.renderCommunityWelcome = this.renderCommunityWelcome.bind(this);
    this.renderJoinButton = this.renderJoinButton.bind(this);
    this.renderPostForm = this.renderPostForm.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.getPosts = this.props.getPosts;

    if (this.currentUser && this.props.community) {
      
      const ids = Object.values(this.currentUser.communities_joined).map((community) => {
        return community.id;
      });
      
      if (ids.includes(props.community.id)) {

        this.state = {
          currentUserIsMember: true
        }
      } else {

        this.state = {
          currentUserIsMember: false
        }
      }
    } else {
      this.state = {
        currentUserIsMember: false
      }
    }
    
    this.getPosts(this.id);

  };
  
  componentWillMount() {
    this.props.fetchCommunity(parseInt(this.props.match.params.communityId));
    this.props.getCommunities();
    if (this.currentUser) {
      this.props.getMemberships(this.currentUser.id);
    }
  };

  componentDidUpdate() {
    this.renderCommunityWelcome();
    this.renderJoinButton();
  }

  handleJoin() {
    if (this.currentUser !== undefined) {
      const membership = { member_id: this.currentUser.id, community_id: this.id }
      this.joinCommunity(membership).then(this.props.getCurrentUser(this.currentUser.id)).then(this.setState({
          currentUserIsMember: true
        }))
    } else {
        return this.props.history.push(`/login`)
    }
  }

  handleUnjoin() {
    const { memberships } = this.props;
    let membershipId;
    
    while (!membershipId) {
      
      for (let i = 0; i < memberships.length; i++) {
        
        if (memberships[i].member_id === this.currentUser.id && memberships[i].community_id === this.id) {
          
          membershipId = memberships[i].id;
          
        }
      }
    }
    
    this.unjoinCommunity(membershipId)
      .then(this.props.getCurrentUser(this.currentUser.id))
      .then(
        this.setState({
          currentUserIsMember: false,
        })
      )
      .then(() => this.renderJoinButton());
  }

  renderCommunityWelcome() {
    if (this.currentUser === undefined) {
      return (
        <div>
          <h2 className="perks-title-text">Select a membership level</h2>
          <h5>(You must be logged in to join a community)</h5>
        </div>
      )
    }
    const { id } = this;
    
    const ids = Object.values(this.currentUser.communities_joined).map((community) => {
      return community.id;
    })
    
    if (this.state.currentUserIsMember === true) {
        
        return (
          <div>
            <h2 className="perks-title-text">You're a member!</h2>
          </div>
        )
      } else {
        
        return (
          <div>
            <h2 className="perks-title-text">Select a membership level</h2>
          </div>
        )
      }

  }

  renderJoinButton() {
    
    if (this.state.currentUserIsMember) {
      
      return (
        <div onClick={this.handleUnjoin} className="unjoin-text">Unjoin</div>
      )
    } else {
      return (
        <div onClick={this.handleJoin} className="join-text">Join</div>
      )
    }
  }

  renderPostForm() {
    if (this.currentUser && (this.creatorId === this.currentUser.id)) {
      return (
        <>
          <PostFormContainer communityId={this.id}/>
        </>
      )
    }
  }

  renderPosts() {
    if (this.state.currentUserIsMember) {
      
      return <PostsIndex community={this.props.community} currentUserIsMember={this.state.currentUserIsMember} posts={this.props.posts} />;
    }
  }

  render() {
    
  
      const {
        name,
        description,
        shortDesc,
        goldPerks,
        bronzePerks,
        silverPerks,
        isPlural,
        backgroundImage
      } = this;
      let background = backgroundImage || 'https://cdn.pixabay.com/photo/2018/09/22/18/27/healthy-3695814_1280.jpg'
    
    return (
      <div className="community-body-outer">
        <div className="community-body-mid">
          <div className="community-body-inner">
            <div className="community-banner">
              <div style={{ backgroundImage: `url(${background})`}} className="community-banner-top">
                <div className="creator-logo-outer">
                  <div className="creator-logo"></div>
                </div>
              </div>
            </div>
            <div className="community-main-outer">
              <div className="community-main">
                <div className="creator-title">
                  <div className="creator-title-inner">
                    <h1 className="creator-title-text">{name}</h1>
                    {isPlural ? (
                      <span className="community-short-desc">{`are creating ${shortDesc}`}</span>
                    ) : (
                      <span className="community-short-desc">{`is creating ${shortDesc}`}</span>
                    )}
                  </div>
                </div>
                <div className="perks-outer">
                  <div className="perks-title">
                    {/* <h2 className="perks-title-text"> */}
                    {this.renderCommunityWelcome()}
                    {/* {this.renderPostForm()} */}
                    {/* hi
                    </h2> */}
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
                                    <div className="bronze-title">
                                      Bronze
                                      <div className="bronze-img-container">
                                        <img
                                          className="bronze-img"
                                          src="https://media.istockphoto.com/photos/red-apple-fruit-with-green-leaf-isolated-on-white-picture-id925389178?k=6&m=925389178&s=612x612&w=0&h=8RfLre7Q0R5eimVJj0L97B9U0OHg6iz9MD4FbwEeeuA="
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bronze-amt-container">
                                    <div className="bronze-amt">
                                      $3
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
                                          {this.renderJoinButton()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bronze-desc3">
                                    <div className="bronze-desc2">
                                      <div className="bronze-desc1">
                                        <div>This tier gives you:</div>
                                        <br />
                                        <br />
                                        <br />
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
                                    <div className="silver-title">
                                      Silver
                                      <div className="silver-img-container">
                                        <img
                                          className="silver-img"
                                          src="https://images.freeimages.com/images/large-previews/fcf/food-4-1324994.jpg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="silver-amt-container">
                                    <div className="silver-amt">
                                      $5
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
                                          {this.renderJoinButton()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="silver-desc3">
                                    <div className="silver-desc2">
                                      <div className="silver-desc1">
                                        <div>This tier gives you:</div>
                                        <br />
                                        <br />
                                        <br />
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
                                    <div className="gold-title">
                                      Gold
                                      <div className="gold-img-container">
                                        <img
                                          className="gold-img"
                                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="gold-amt-container">
                                    <div className="gold-amt">
                                      $10
                                      <div className="gold-per">per month</div>
                                      <div className="gold-waived">
                                        (Waived for Demo Users!)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="join-container">
                                    <div className="join4">
                                      <div className="join3">
                                        <div className="join2">
                                          {this.renderJoinButton()}
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
                <div className="about1">
                  <div className="about2">
                    <div className="about3">
                      <div className="about4">
                        <div className="about-title">
                          <h3 className="about-title1">About</h3>
                        </div>
                        <div className="about-body">
                          <div className="about-body1">
                            <div className="about-body2">
                              <div className="about-body3">
                                <div className="about-body4">
                                  <div className="about-body5">
                                    <div className="about-body6">
                                      <div className="about-body7">
                                        <div className="about-body8">
                                          <div className="about-body9">
                                            {description}
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
              {this.renderPosts()}
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
      </div>
    );
  }
}

export default Community;