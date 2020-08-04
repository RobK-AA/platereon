import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './login_form/login_form_container';
import HeaderContainer from './header/header_container';
import UserShowContainer from './user_show/user_show_container';
import BodyContainer from './body/body_container';
import CommunityContainer from './community/community_container';

const App = ({ currentUser }) => (
  <div>
    <Route component={HeaderContainer} />
    <Route component={BodyContainer} />
    
     <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
      {/* <ProtectedRoute exact path="/createform" component={CommunityFormContainer} /> */}
      <Route path='login' component={HeaderContainer}/>
      <Route path='community' component={CommunityContainer} />
      {/* <Route path='createform' component={UserShowContainer} /> */}
    </Switch> 
  </div>
);
export default App;