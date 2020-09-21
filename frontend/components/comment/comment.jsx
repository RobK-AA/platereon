// import { connect } from "react-redux";
// import Comment from './comment';
// import { createComment } from "../../actions/comment_actions";

// const msp = (state, ownProps) => {

//   return {
//     currentUser: state.entities.users[state.session.id],
//     memberships: Object.values(state.entities.memberships),
//     posts: Object.values(state.entities.posts),
//   };
// };

// const mdp = dispatch => {

//   return {
//     submitComment: comment => dispatch(createComment(comment)),
//   }
// };

// export default connect(msp, mdp)(Comment);