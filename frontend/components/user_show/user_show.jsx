import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import {Route } from 'react-router-dom';
import CommunityContainer from '../community/community_container'
import UserMainContainer from '../user_main/user_main_container'

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
              <Route path="/community/:communityId" component={CommunityContainer} />
            </div>
        </div>
        :
        <UserMainContainer currentUser={currentUser} />
    );
  }
};

export default UserShow;
