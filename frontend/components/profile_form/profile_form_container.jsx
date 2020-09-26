import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { updateUser } from "../../actions/user_actions";
import { clearCommunityErrors } from "../../actions/community_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mdp = (dispatch) => {
  return {
    updateProfile: (user, userId) => dispatch(updateUser(user, userId)),
    clearErrors: () => dispatch(clearCommunityErrors()),
  };
};

export default connect(msp, mdp)(ProfileForm);
