import React from 'react';
import PostsContainer from '../post/post_container'
import Footer from '../footer/footer';
import ls from 'local-storage'
import PostFormContainer from '../post/post_form_container';
import PostsIndex from "../post/posts_index";

class Community extends React.Component {

  constructor(props) {
    super(props);
    this.props.getCommunities();

    if (this.currentUser) {
      this.props
        .getMemberships(this.currentUser.id)
        .then(this.getPosts(this.id));
    }
    
    // if (this.props.community) {
      
    //   this.name = this.props.community.name || "";
    //   this.description = this.props.community.description || "";
    //   this.shortDesc = this.props.community.short_description || "";
    //   this.goldPerks = this.props.community.gold_perks || "";
    //   this.silverPerks = this.props.community.silver_perks || "";
    //   this.bronzePerks = this.props.community.bronze_perks || "";
    //   this.isPlural = this.props.community.plural || "";
    //   this.creatorId = this.props.community.creator_id || "";
    // }
    
    // this.name = this.props.community.name || "";
    // this.description = this.props.community.description || "";
    // this.shortDesc = this.props.community.short_description || "";
    // this.goldPerks = this.props.community.gold_perks || "";
    // this.silverPerks = this.props.community.silver_perks || "";
    // this.bronzePerks = this.props.community.bronze_perks || "";
    // this.isPlural = this.props.community.plural || "";
    // this.creatorId = this.props.community.creator_id || "";
    // this.backgroundImage = this.props.community.background_image;
    // this.profilePhoto = this.props.community.profile_photo;
    this.id = this.props.id;
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
          currentUserIsMember: true,
          loading: true
        }
      } else {

        this.state = {
          currentUserIsMember: false,
          loading: true
        }
      }
    } else {
      this.state = {
        currentUserIsMember: false,
        loading: true
      }
    }
    this.props.getPosts(this.props.id)
  };
  
  componentDidCatch() {
    this.props.getCommunities().then(this.props.fetchCommunity(parseInt(this.props.match.params.communityId)));
    
    if (this.currentUser) {
      this.props
        .getMemberships(this.currentUser.id)
        .then(this.getPosts(this.props.id));
    }
    
  };
  
  componentDidMount() {
    this.props.fetchCommunity(parseInt(this.props.match.params.communityId)).then(this.setState({ loading: false }));
    this.props.getCommunities();
    if (this.currentUser) {
      this.props
        .getMemberships(this.currentUser.id)
        .then(this.getPosts(this.props.id));
    }
  };

  componentWillUnmount() {
    
    () => this.props.fetchCommunities();
  }

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
      
      return <PostsIndex posts={this.props.posts} />;
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
        backgroundImage, 
        profilePhoto
      } = this.props.community;
    let background = backgroundImage || 'https://cdn.pixabay.com/photo/2018/09/22/18/27/healthy-3695814_1280.jpg';
    let photo = profilePhoto || "https://c8.patreon.com/2/200/c5055377";
    return (
      <div className="community-body-outer">
        <div className="community-body-mid">
          <div className="community-body-inner">
            <div className="community-banner">
              <div
                style={{ backgroundImage: `url(${background})` }}
                className="community-banner-top"
              >
                <div className="creator-logo-outer">
                  <div
                    style={
                      profilePhoto
                        ? {
                            backgroundImage: `url(${profilePhoto})`,
                          }
                        : {
                          backgroundImage: `url("https://c8.patreon.com/2/200/c5055377")`,
                          }
                    }
                    className="creator-logo"
                  ></div>
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;