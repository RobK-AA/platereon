import * as CommunityApiUtil from '../util/community_api_util';

export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';

export const receiveCommunity = community => {
  return {
    type: RECEIVE_COMMUNITY,
    community
  }
};

export const fetchCommunity = communityId => dispatch => {
  return CommunityApiUtil.fetchCommunity(communityId).then(
    community => dispatch(receiveCommunity(community))
  )
};

export const createCommunity = community => dispatch => {
  return CommunityApiUtil.createCommunity(community).then(
    community => dispatch(receiveCommunity(community))
  )
};

export const updateCommunity = community => dispatch => {
  return CommunityApiUtil.updateCommunity(community).then(
    community => dispatch(receiveCommunity(community))
  )
};