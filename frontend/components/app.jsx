import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Header from './header/header'

const App = () => (
  <div>
    <Header />
    <header> 
      <h1>Change the way cooking is valued</h1>
      <p>Let your most passionate diners support your culinary creations
        via monthly membership
      </p>
    </header>
    <GreetingContainer />
    
     <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch> 
  </div>
);
export default App;