import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import { Route, Link } from 'react-router-dom';
import CommunitiesReducer from '../../reducers/communities_reducer';
import community_container from '../community/community_container';
import PostContainer from '../post/post_container'
import MainFeedPostContainer from '../post/main_feed_post_container';
import FeedContainer from "../feed/feed_container";

class UserMain extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.currentUserId = this.props.currentUser.id;
    this.renderCommunitiesCreated = this.renderCommunitiesCreated.bind(this);
    this.renderCommunitiesJoined = this.renderCommunitiesJoined.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
    this.getMemberships = this.props.getMemberships;
    this.communitiesJoined = this.props.currentUser.communities_joined;
    this.renderJoinMessage = this.renderJoinMessage.bind(this);
  };
  
  componentDidMount() {
    
    this.getMemberships().then(
      this.props.getCommunities())
      // .then(
      //   this.props.getCurrentUser(this.currentUserId));
  }

  componentDidUpdate() {
    this.renderLinks();
  }

  renderCommunitiesJoined() {
    
    const that = this.props.membershipsMessage || "";
    return (
      <>
        <ul className="community-links">
          {this.renderJoinMessage()}
          {this.communitiesJoined.map((community, i) => {
                return (
                    <Link key={`community-${i}`} to={`/communities/${community.id}`}>
                      <li key={i}>{community.name}</li>
                    </Link>
                )
              }
          )}
        </ul>
      </>
    )
  }

  renderJoinMessage() {

    if (this.props.membershipsMessage.noMembershipsMessage && !$('community-link').innerHTML) {

      return (
        <>
        <li key="10000">
          {this.props.membershipsMessage.noMembershipsMessage}
        </li>
        </>
      )
    }
  }

  renderCommunitiesCreated() {

    return (
      <>
        <ul className="community-links">
          {Object.values(this.props.communities).map((community, i) => {
            if (community.creator_id === this.currentUserId) {
              
              return (
                <Link id="community-link" communities={this.props.communities} key={`community-created-${i}`} to={`/communities/${community.id}`}>
                  <li key={`community-create-${i}`}>{community.name}</li>
                </Link>
              )
            }
          })}
        </ul>
      </>
    )
  }

  renderLinks() {
    if (this.props.communities[0]) {
      return (
        <>
          <div className="communities-created">
            <h5 className="community-links-title">Communities Created</h5>
            {this.renderCommunitiesCreated()}
          </div>
          <div className="communities-joined">
            <h5 className="community-links-title">Communities Joined</h5>
            {this.renderCommunitiesJoined()}
          </div>
        </>
      )
    }
  }

  render() {
    const { currentUser } = this.props;
    const { communities } = this.props || [];
    // let feedPosts;
    // if (this.currentUser.posts_in_communities_joined !== undefined) {
    //   feedPosts = Object.values(
    //     this.currentUser.posts_in_communities_joined).reverse();
    // }
    

    return (
      <div className="user-main5">
        <div className="user-main4">
          <div className="user-main3">
            <div className="user-main2">
              <div className="user-main1">
                <div className="left-panel5">
                  <div className="left-panel4">
                    <div className="left-panel3">
                      <div className="left-panel2">
                        <div className="left-panel1">
                          <div className="main-logo-outer-frame">
                            <div className="main-logo-outer">
                              <div className="main-logo-container">
                                <div
                                  style={
                                    currentUser.profile_photo
                                      ? {
                                          backgroundImage: `url(${currentUser.profile_photo})`,
                                        }
                                      : {
                                          backgroundImage: `url("https://c8.patreon.com/2/200/c5055377")`,
                                        }
                                  }
                                  className="main-logo"
                                ></div>
                                <div className="user-main-name-container">
                                  <span className="user-main-name">
                                    {currentUser.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lower-left1">
                            <div className="lower-left2">
                              <div className="lower-left3">
                                <div className="lower-left4">
                                  <div className="lower-left5">
                                    <div className="supporting1">
                                      <div className="supporting2">
                                        <h5 className="supporting3">
                                          SUPPORTING
                                        </h5>
                                      </div>
                                    </div>
                                    <span className="lower-left6">
                                      Go support other Platereon communities or
                                      create one yourself!
                                    </span>
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
                <div className="community-links4">
                  <div className="community-links3">
                    <div className="community-links2">
                      <div className="community-links1">
                        {/* {this.renderLinks()} */}
                        <FeedContainer
                          posts={this.currentUser.posts_in_communities_joined}
                        />
                        {/* {feedPosts.map((post, i) => {
                          return (
                            <>
                              <MainFeedPostContainer
                                communityId={post.community_id}
                                title={post.title}
                                body={post.body}
                                createdAt={post.created_at}
                                key={i}
                                post={post}
                                />
                            </>
                          );
                        })} */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mid-panel1">
                  <div className="mid-panel2">
                    <div className="mid-panel3">
                      <div className="mid-panel4">
                        <div className="mid-panel5">
                          <div className="mid-panel6">
                            <div className="upper-right-title">
                              <div className="ur-title1">
                                <div className="ur-title2">
                                  <h5 className="ur-title-creator">Become a creator</h5>
                                </div>
                              </div>
                            </div>
                            <p className="upper-right-text-creator">
                              Build a membership for your fans and get paid to
                              create on your own terms.
                            </p>
                            <div className="get-started-link-creator">
                              <Link
                                className="main-create-link"
                                to={`/createform`}
                              >
                                <p className="main-create2"> Get started</p>
                                <div className="main-create1">
                                  <div className="main-create2"></div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lower-panel">
                    <div className="lower-panel1">
                      <div className="lower-panel2">
                        <div className="lower-panel3">
                          <div className="lower-panel4">
                            <div className="lower-panel6">
                              <div className="upper-right-title">
                                <div className="ur-title1">
                                  <div className="ur-title2">
                                    <h5 className="ur-title">
                                      Post to your Communities
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <p className="upper-right-text">
                                Share content with your fans.
                              </p>
                              <div className="get-started-link">
                                <Link
                                  className="main-post-link"
                                  to={`/postform`}
                                >
                                  <p className="main-create2">Make a post</p>
                                  <div className="main-create1">
                                    <div className="main-create2"></div>
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
            </div>
          </div>
        </div>
        <div></div>
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
                          <li key="1000" className="footer-ul10">
                            FOR CREATORS
                          </li>
                          <li key="1001" className="footer-ul11">
                            About
                          </li>
                          <li key="1002" className="footer-ul12">
                            GitHub
                          </li>
                          <li key="1003" className="footer-ul13">
                            LinkedIn
                          </li>
                          <li key="1004" className="footer-ul14">
                            App Academy
                          </li>
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
    );
  }
};

export default UserMain;
