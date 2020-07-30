import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(UserShow);