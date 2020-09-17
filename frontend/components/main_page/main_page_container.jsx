import { connect } from "react-redux";
import MainPage from './main_page';
import { receiveResults } from "../../actions/search_actions";

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  search: (keyword) => dispatch(receiveResults(keyword)),
});

export default connect(msp, mdp)(MainPage);