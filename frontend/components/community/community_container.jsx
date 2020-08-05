import { connect } from "react-redux";
import Community from './community';
import { updateCommunity } from '../../actions/community_actions'

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  community: state.entities.communities[ownProps.match.params.communityId]
});

export default connect(msp)(Community);