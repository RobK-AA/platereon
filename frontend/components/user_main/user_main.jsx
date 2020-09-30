import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import { Route, Link } from 'react-router-dom';
import Footer from '../footer/footer';
import community_container from '../community/community_container';
import PostContainer from '../post/post_container'
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
    this.communitiesJoined = Object.values(this.props.currentUser.communities_joined_photos);
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
                <li className="supporting-list-item" key={i}>
                  <div className="supporting-list-item1">
                    <Link
                      className="supporting-list-item2"
                      key={`community-${i}`}
                      to={`/communities/${community.id}`}
                    >
                      <div className="supporting-list-item3">
                        <div className="supporting-photo1">
                          <div
                            style={
                              community.profile_photo
                                ? {
                                    backgroundImage: `url(${community.profile_photo})`,
                                  }
                                : {
                                    backgroundImage: `url("https://c8.patreon.com/2/200/c5055377")`,
                                  }
                            }
                            className="supporting-photo2"
                          ></div>
                        </div>
                        <div className="supporting-name1">
                          <div className="supporting-name2">
                            {community.name}
                          </div>
                          <div className="supporting-amt1">
                            <span className="supporting-amt2">
                              Monthly fee waived (Demo User)
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      );
    
  }

  renderJoinMessage() {

    if (this.props.membershipsMessage.noMembershipsMessage && !$('community-link').innerHTML) {

      return (
        <>
        <li className="join-list-item" key="10000">
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
                                    {this.renderCommunitiesJoined()}
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
                                  to={`/postforms`}
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
        <Footer />
      </div>
    );
  }
};

export default UserMain;
