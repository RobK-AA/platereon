import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import CommunitiesReducer from './communities_reducer';
import MembershipsReducer from './memberships_reducer';
import SearchReducer from './search_reducer';
import PostsReducer from './posts_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  communities: CommunitiesReducer,
  memberships: MembershipsReducer,
  posts: PostsReducer,
  search: SearchReducer
  
});

export default EntitiesReducer;