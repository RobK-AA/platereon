import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserMain from './user_main';
import { fetchMemberships } from '../../actions/membership_actions';
import { fetchCommunities } from '../../actions/community_actions';
import { fetchCurrentUser } from '../../actions/user_actions';

const msp = state => {
  
  return  {
    communities: Object.values(Object.values(state.entities.communities)),
    currentUser: state.entities.users[state.session.id],
    memberships: Object.values(state.entities.memberships),
    membershipsMessage: state.entities.memberships
}};

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  getMemberships: (userId) => dispatch(fetchMemberships(userId)),
  getCommunities: () => dispatch(fetchCommunities()),
  getCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  getPosts: (communityId) => dispatch(fetchPosts(communityId))
});

export default connect(msp, mdp)(UserMain);