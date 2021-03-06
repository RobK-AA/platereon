import { connect } from "react-redux";
import Post from './post';
import { createPost, updatePost, deletePost, fetchPosts } from '../../actions/post_actions';
import { fetchCommunity } from '../../actions/community_actions';
import { createMembership, deleteMembership, fetchMemberships } from "../../actions/membership_actions";
import { createComment } from "../../actions/comment_actions";
// import { selectCurrentUser, selectPostLikes } from "../../reducers/selectors";
import { like, unlike } from "../../actions/like_actions";
import { fetchCurrentUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  
  const currentUser = state.entities.users[state.session.id];
  const likes = ownProps.post.likes;
  // const likes = selectPostLikes(ownProps.post.id, state);
  const like = likes ? likes[currentUser.id] : undefined;
  const likeId =  like ? like.id : undefined;
  
  return {
    post: ownProps.post,
    currentUser,
    likes,
    likeId,
    likedByCurrentUser: likes && likes[currentUser.id] ? true : false,
    memberships: Object.values(state.entities.memberships),
    posts: Object.values(state.entities.posts),
  };
};

const mdp = dispatch => {
  
  return {
    submitComment: (comment) => dispatch(createComment(comment)),
    fetchCommunity: (communityId) => dispatch(fetchCommunity(communityId)),
    joinCommunity: (membership) => dispatch(createMembership(membership)),
    unjoinCommunity: (membershipId) => dispatch(deleteMembership(membershipId)),
    getPosts: (communityId) => dispatch(fetchPosts(communityId)),
    submitPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    likePost: (likeObj) => dispatch(like(likeObj)),
    unlikePost: (likeId) => dispatch(unlike(likeId)),
    getMemberships: (userId) => dispatch(fetchMemberships(userId)),
    getCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  };
};

export default connect(msp, mdp)(Post);