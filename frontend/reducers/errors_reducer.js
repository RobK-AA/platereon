
import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import CommunityErrorsReducer from './community_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  communities: CommunityErrorsReducer
});

export default ErrorsReducer;