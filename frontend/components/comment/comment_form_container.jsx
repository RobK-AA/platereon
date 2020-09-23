import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comment_actions";
import { fetchMemberships } from "../../actions/membership_actions";
import { fetchCommunities } from "../../actions/community_actions";
import { fetchCurrentUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    comment: {
      commentable_id: ownProps.commentableId,
      commentable_type: ownProps.commentableType,
      body: "",
      commenter_id: state.session.id,
    },
  };
};

const mdp = dispatch => {
  return {
    submitComment: comment => dispatch(createComment(comment)),
    getMemberships: userId => dispatch(fetchMemberships(userId)),
    getCommunities: () => dispatch(fetchCommunities()),
    getCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  }
};

export default connect(msp, mdp)(CommentForm);