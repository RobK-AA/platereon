import { connect } from "react-redux";
import Feed from "./feed";
import { fetchCurrentUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser,
    posts: ownProps.posts,
  };
};

const mdp = (dispatch) => {
  return {
    // getPosts: (communityId) => dispatch(fetchPosts(communityId)),
    getCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  };
};

export default connect(msp, mdp)(Feed);
