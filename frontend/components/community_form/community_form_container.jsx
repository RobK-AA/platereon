import { connect } from "react-redux";
import CommunityForm from './community_form';
import { createCommunity } from '../../actions/community_actions'

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  submitCommunity: community => dispatch(createCommunity(community))
});

export default connect(msp, mdp)(CommunityForm)