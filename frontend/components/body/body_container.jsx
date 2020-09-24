import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCommunities } from '../../actions/community_actions'
import Body from './body';
import { fetchMemberships } from '../../actions/membership_actions';
import { fetchCurrentUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  communities: Object.values(state.entities.communities)
});

const mdp = dispatch => {
  
  return {
    logout: () => dispatch(logout()),
    getCommunities: () => dispatch(fetchCommunities()),
    getMemberships: (userId) => dispatch(fetchMemberships(userId)),
    getCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    getPosts: (communityId) => dispatch(fetchPosts(communityId))
  }
};

export default connect(msp, mdp)(Body);