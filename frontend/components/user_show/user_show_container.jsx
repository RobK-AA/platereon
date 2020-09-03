import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';
import { fetchCommunities } from '../../actions/community_actions';
import { fetchMemberships } from '../../actions/membership_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  communites: Object.values(state.entities.communities)
});

const mdp = dispatch => {
  debugger
  return {
    logout: () => dispatch(logout()),
    getCommunities: () => dispatch(fetchCommunities()),
    getMemberships: (userId) => dispatch(fetchMemberships(userId))
  }
};

export default connect(msp, mdp)(UserShow);