import React from 'react';
import PostsIndex from '../post/posts_index';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidCatch() {
  //   this.props.currentUser.communities_joined.forEach(element => {
  //     this.props.fetchPosts(element.id)
  //   });
  // }
  
  componentDidMount() {
    if (this.props.signedIn) {
      () => this.props.getCurrentUser(this.props.CurrentUser.id);
    }
  }

  render() {
    return this.props.posts ? (
      <>
        <div className="feed-outer">
          <div className="feed-top">
            <div className="feed-top1">
              <div className="feed-top-left">
                <div className="feed-top-left1">
                  <div className="feed-top-left2">
                    <div className="feed-top-left3">
                      <div className="feed-top-left4">
                        <ul className="feed-top-left-list">
                          <li className="feed-top-list-item1">
                            <a className="feed-top-list-item11" href="/">
                              <div className="feed-top-list-item12">
                                <div className="feed-top-list-item13">
                                  <div className="feed-top-list-item14">
                                    <span className="feed-top-list-item15">
                                      <span className="feed-top-list-item16">
                                        All posts
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="feed-top-list-item2">
                            <a className="feed-top-list-item11" href="/">
                              <div className="feed-top-list-item12">
                                <div className="feed-top-list-item13">
                                  <div className="feed-top-list-item14">
                                    <span className="feed-top-list-item15">
                                      <span className="feed-top-list-item166">
                                        Plateron-only posts
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feed-top-right">
                <div className="feed-top-right1">
                  <div className="feed-top-right2">
                    <div className="feed-top-right3">
                      <div className="feed-top-right4">
                        <div className="feed-top-right5">
                          <div className="feed-top-right6">
                            <span>Showing: All Creators</span>
                          </div>
                          <div className="feed-top-right7">
                            <span>
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path></path>
                              </svg>
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
          <PostsIndex posts={Object.values(this.props.posts)} />
        </div>
      </>
    ) : (
      <div>Search for and join communities to see posts in your feed!</div>
    );
  }
}

// const msp = (state) => ({
//   currentUser: state.entities.users[state.session.id],
// });

// const mdp = (dispatch) => {
//   return {
//     getPosts: (communityId) => dispatch(fetchPosts(communityId)),
//   };
// };

// export default connect(msp)(mdp)(Feed);

export default Feed;