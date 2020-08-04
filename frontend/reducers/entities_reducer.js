import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import CommunitiesReducer from './communities_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  communities: CommunitiesReducer
});

export default EntitiesReducer;