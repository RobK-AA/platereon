import { connect } from "react-redux";
import Post from './post';
import { createPost, updatePost, deletePost } from '../../actions/post_actions';
import { fetchCommunity } from '../../actions/community_actions';
import { createMembership, deleteMembership } from "../../actions/membership_actions";

const msp = (state, ownProps) => {
  
  return {
    currentUser: state.entities.users[state.session.id],
    memberships: Object.values(state.entities.memberships),
    posts: Object.values(state.entities.posts),
  };
};

const mdp = dispatch => {

  return {
    fetchCommunity: communityId => dispatch(fetchCommunity(communityId)),
    joinCommunity: membership => dispatch(createMembership(membership)),
    unjoinCommunity: membershipId => dispatch(deleteMembership(membershipId)),
    submitPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
  }
};

export default connect(msp, mdp)(Post);