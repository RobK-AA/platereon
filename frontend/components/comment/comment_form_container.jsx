import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comment_actions";

const msp = (state, ownProps) => {
  return {
    comment: {
      commentable_id: ownProps.commentableId,
      commentable_type: ownProps.commentableType,
      body: "",
      commenter_id: state.session.id
    }
  }
};

const mdp = dispatch => {
  return {
    submitComment: comment => dispatch(createComment(comment))
  }
};

export default connect(msp, mdp)(CommentForm);