import { connect } from "react-redux";
import Community from './community';
import { fetchCommunity } from '../../actions/community_actions'
import { createMembership, deleteMembership } from "../../actions/membership_actions";

const msp = (state, ownProps) => {
  
  return {
    currentUser: state.entities.users[state.session.id],
    community: state.entities.communities[ownProps.match.params.communityId],
    memberships: Object.values(state.entities.memberships)
  };
};

const mdp = dispatch => {
  
  return {
    fetchCommunity: communityId => dispatch(fetchCommunity(communityId)),
    joinCommunity: membership => dispatch(createMembership(membership)),
    unjoinCommunity: membershipId => dispatch(deleteMembership(membershipId))
}};

export default connect(msp, mdp)(Community);