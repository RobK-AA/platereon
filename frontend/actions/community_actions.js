import * as CommunityApiUtil from '../util/community_api_util';

export const RECEIVE_COMMUNITIES = 'RECEIVE_COMMUNITIES';
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';

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
    communities => dispatch(receiveCommunities(communities))
  )
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