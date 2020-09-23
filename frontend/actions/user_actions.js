import * as UserApiUtil from "../util/user_api_util";
import { receiveErrors } from "../actions/session_actions";
import { receiveCurrentUser } from "../actions/session_actions"

export const fetchCurrentUser = userId => dispatch => {
  
  return UserApiUtil.fetchUser(userId).then(
    user => {
      
      dispatch(receiveCurrentUser(user))
    }, (errors) => {
      dispatch(receiveErrors(errors.responseJSON))
    }
  )
};
