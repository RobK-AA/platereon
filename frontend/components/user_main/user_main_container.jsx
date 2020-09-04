import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserMain from './user_main';
import { fetchMemberships } from '../../actions/membership_actions'

const msp = state => {
  
  return  {
    communities: Object.values(Object.values(state.entities.communities)),
    currentUser: state.entities.users[state.session.id],
    memberships: Object.values(state.entities.memberships)
}};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  getMemberships: (userId) => dispatch(fetchMemberships(userId))
});

export default connect(msp, mdp)(UserMain);