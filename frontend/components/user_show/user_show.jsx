import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import CommunityContainer from '../community/community_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { currentUser, location } = this.props;

    return (location.pathname === "/createform") 
      ?
      (
      <Route component={CommunityFormContainer} />
      ) 
      :
      (
      (location.pathname.includes('communities')) 
      ?
      
      <div className={`${currentUser.name}-page user-page`}>
          <div>
            <Route path="/api/communities" component={CommunityContainer} />
          </div>
      </div>

      :
      <h3>{currentUser.name}, welcome to Platereon.</h3>
    );
  }
};

export default UserShow;
