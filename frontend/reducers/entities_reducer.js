import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import CommunitiesReducer from './communities_reducer';
import MembershipsReducer from './memberships_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  communities: CommunitiesReducer,
  memberships: MembershipsReducer
});

export default EntitiesReducer;