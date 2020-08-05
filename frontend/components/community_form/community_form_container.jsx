import { connect } from "react-redux";
import CommunityForm from './community_form';
import { createCommunity } from '../../actions/community_actions'
import { fetchCommunity } from "../../util/community_api_util";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.communities,
  community: state.entities.communities
});

const mdp = dispatch => ({
  submitCommunity: community => dispatch(createCommunity(community))
});

export default connect(msp, mdp)(CommunityForm)