import * as CommunityApiUtil from '../util/community_api_util';

export const RECEIVE_COMMUNITIES = 'RECEIVE_COMMUNITIES';
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const RECEIVE_COMMUNITY_ERRORS = 'RECEIVE_COMMUNITY_ERRORS';
export const CLEAR_COMMUNITY_ERRORS = "CLEAR_COMMUNITY_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_COMMUNITY_ERRORS,
  errors
});

export const clearCommunityErrors = () => ({
  type: CLEAR_COMMUNITY_ERRORS
});

export const receiveCommunities = communities => {
  return {
    type: RECEIVE_COMMUNITIES,
    communities
  }
};

export const receiveCommunity = community => {
  return {
    type: RECEIVE_COMMUNITY,
    community
  }
};

export const fetchCommunities = () => dispatch => {
  return CommunityApiUtil.fetchCommunities().then(
    communities => dispatch(receiveCommunities(communities), 
      error => {
        dispatch(receiveErrors(error.responseJSON))
      })
  )
};

export const fetchCommunity = communityId => dispatch => {
  return CommunityApiUtil.fetchCommunity(communityId).then(
    community => dispatch(receiveCommunity(community), 
      error => {
        dispatch(receiveErrors(error.responseJSON))
      })
  )
};

export const createCommunity = community => dispatch => {
  debugger
  return CommunityApiUtil.createCommunity(community).then(
    community => {dispatch(receiveCommunity(community))
    }, errors => {
        debugger
    dispatch(receiveErrors(errors.responseJSON))
  })
};

export const updateCommunity = community => dispatch => {
  return CommunityApiUtil.updateCommunity(community).then(
    community => dispatch(receiveCommunity(community), 
    error => {
        dispatch(receiveErrors(error.responseJSON))
      })
  )
};