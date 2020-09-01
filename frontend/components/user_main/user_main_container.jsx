import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserMain from './user_main';

const msp = state => {
  debugger
  return  {
    communities: Object.values(state.entities.communities),
    currentUser: state.entities.users[state.session.id]

}};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(UserMain);