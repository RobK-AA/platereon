import { connect } from "react-redux";
import Community from './community';
import { fetchCommunity } from '../../actions/community_actions'

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    community: state.entities.communities[ownProps.match.params.communityId]
  };
};

const mdp = dispatch => {
  return {
    fetchCommunity: communityId => dispatch(fetchCommunity(communityId))
}};

export default connect(msp, mdp)(Community);