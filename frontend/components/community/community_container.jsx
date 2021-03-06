import { connect } from "react-redux";
import Community from './community';
import { fetchCommunity, fetchCommunities } from '../../actions/community_actions'
import { createMembership, deleteMembership, fetchMemberships } from "../../actions/membership_actions";
import { fetchCommunityPosts, fetchPost, createPost, updatePost, deletePost } from '../../actions/post_actions';
import { fetchCurrentUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  
  return {
    currentUser,
    id: parseInt(ownProps.match.params.communityId),
    community: state.entities.communities[ownProps.match.params.communityId],
    memberships: Object.values(state.entities.memberships),
    posts:
      currentUser !== undefined &&
      currentUser.posts_in_communities_joined !== undefined
        ? Object.values(
            state.entities.users[state.session.id].posts_in_communities_joined
          ).filter((post) => {
            return (
              post.community_id === parseInt(ownProps.match.params.communityId)
            );
          })
        : [],
  };
};

const mdp = dispatch => {
  
  return {
    fetchCommunity: (communityId) => dispatch(fetchCommunity(communityId)),
    joinCommunity: (membership) => dispatch(createMembership(membership)),
    unjoinCommunity: (membershipId) => dispatch(deleteMembership(membershipId)),
    getPosts: (communityId) => dispatch(fetchCommunityPosts(communityId)),
    getPost: (postId) => dispatch(fetchPost(postId)),
    submitPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    getCommunities: () => dispatch(fetchCommunities()),
    getMemberships: (userId) => dispatch(fetchMemberships(userId)),
    getCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  };
};

export default connect(msp, mdp)(Community);