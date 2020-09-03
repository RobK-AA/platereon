import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import {Route } from 'react-router-dom';
import CommunityContainer from '../community/community_container'
import UserMainContainer from '../user_main/user_main_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    debugger
    this.props.getMemberships(this.props.currentUser.id);
  }

  render () {
    const { currentUser, location } = this.props;

    
    return (location.pathname === "/createform") 
      ?
      (<Route component={CommunityFormContainer} />) 
      :
      (
        (location.pathname.includes('communities')) 
        ?
        <div className="community-page">
            <div>
              <Route communities={this.props.communities} path="/api/communities/:communityId" component={CommunityContainer} />
            </div>
        </div>
        :
        <UserMainContainer currentUser={currentUser} />
    );
  }
};

export default UserShow;
