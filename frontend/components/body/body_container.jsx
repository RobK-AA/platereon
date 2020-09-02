import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCommunities } from '../../actions/community_actions'
import Body from './body';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  communities: Object.values(state.entities.communities)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  getCommunities: () => dispatch(fetchCommunities())
});

export default connect(msp, mdp)(Body);