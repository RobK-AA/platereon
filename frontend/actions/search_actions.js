import * as CommunityApiUtil from '../util/community_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveSearchResults = searchResults => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
  }
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors,
});

export const receiveResults = (keyword) => dispatch => {

  return CommunityApiUtil.fetchCommunities(keyword).then(results => {
    dispatch(receiveSearchResults(results))
  }, errors => {
        dispatch(receiveErrors(errors.responseJSON))
    })
};