import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container';
import BodyContainer from './body/body_container';


const App = ({ currentUser }) => (
  <div>
    <Route component={HeaderContainer} />
    <Route component={BodyContainer} />
  </div>
);
export default App;