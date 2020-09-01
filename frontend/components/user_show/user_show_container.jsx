import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';
import { fetchCommunities } from '../../actions/community_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  getCommunities: () => dispatch(fetchCommunities())
});

export default connect(msp, mdp)(UserShow);