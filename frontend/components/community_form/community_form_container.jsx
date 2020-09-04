import { connect } from "react-redux";
import CommunityForm from './community_form';
import { createCommunity } from '../../actions/community_actions'
import { clearCommunityErrors } from "../../actions/community_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.communities,
  community: state.entities.communities
});

const mdp = dispatch => ({
  submitCommunity: community => dispatch(createCommunity(community)),
  clearErrors: () => dispatch(clearCommunityErrors())
});

export default connect(msp, mdp)(CommunityForm)