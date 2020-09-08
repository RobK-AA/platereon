import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const SearchReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults //|| ["No results found"]
    default:
      return oldState;
  }
};

export default SearchReducer;