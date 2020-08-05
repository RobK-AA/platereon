import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import {Route } from 'react-router-dom';
import CommunityContainer from '../community/community_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { currentUser, location } = this.props;

    return (location.pathname === "/createform") 
      ?
      (<Route component={CommunityFormContainer} />) 
      :
      (
        (location.pathname.includes('community')) 
        ?
        <div className="community-page">
            <div>
              <Route path="/community" component={CommunityContainer} />
            </div>
        </div>
        :
        <h3>{currentUser.name}, welcome to Platereon.</h3>
    );
  }
};

export default UserShow;
