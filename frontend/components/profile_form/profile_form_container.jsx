import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { createCommunity } from "../../actions/community_actions";
import { clearCommunityErrors } from "../../actions/community_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mdp = (dispatch) => {
  return {
    submitCommunity: (community) => dispatch(createCommunity(community)),
    clearErrors: () => dispatch(clearCommunityErrors()),
  };
};

export default connect(msp, mdp)(ProfileForm);
