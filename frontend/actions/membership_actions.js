import * as MembershipApiUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIPS = 'RECEIVE_MEMBERSHIPS';
export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';

export const receiveMemberships = memberships => {
  debugger
  return {
    type: RECEIVE_MEMBERSHIPS,
    memberships
  }
};

export const receiveMembership = membership => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  }
};

export const fetchMemberships = (userId) => dispatch => {
  debugger
  return MembershipApiUtil.fetchMemberships(userId).then(
    memberships => dispatch(receiveMemberships(memberships),
      error => {
        dispatch(receiveErrors(error.responseJSON))
      })
  )
};

export const createMembership = (membership) => dispatch => {
  return MembershipApiUtil.createMembership(membership).then(
    membership => dispatch(receiveMembership(membership),
      error => {
        dispatch(receiveErrors(error.responseJSON))
      })
  )
};