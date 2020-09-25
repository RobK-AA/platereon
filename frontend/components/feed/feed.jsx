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

  render() {
    
    return(
      <>
        <PostsIndex posts={Object.values(this.props.posts)} />
      </>
    )
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