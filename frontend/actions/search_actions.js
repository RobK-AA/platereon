import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = searchResults => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
  }
};

export const receiveResults = (keyword) => dispatch => {

  return SearchApiUtil.createSearch(keyword).then(results => {
    dispatch(receiveSearchResults(results))
  }, error => {
        dispatch(receiveErrors(error.responseJSON))
    })
};