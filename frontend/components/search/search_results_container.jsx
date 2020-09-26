import { connect } from "react-redux";
import SearchResults from './search_results';

const msp = state => ({
  searchResults: Object.values(state.entities.search),
  currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  search: (keyword) => dispatch(receiveResults(keyword))
})

export default connect(msp, mdp)(SearchResults)