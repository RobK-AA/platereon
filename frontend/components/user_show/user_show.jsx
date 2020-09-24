import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import {Route } from 'react-router-dom';
import CommunityContainer from '../community/community_container'
import UserMainContainer from '../user_main/user_main_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCommunities().then(console.log("hey"));
    
    console.log("hey again");
  };

  // componentWillMount() {
  //   
  //   this.props.getMemberships(this.props.currentUser.id);
  // }

  render () {
    const { currentUser, location } = this.props;
    // return (
   
    // )
    return location.pathname === "/createform" ? (
      <Route exact path="/createform" component={CommunityFormContainer} />
    ) : location.pathname.includes("communities") || (location.href && location.href.split('/').includes('communities')) ? (
      <div className="community-page">
        <div>
          <Route
            communities={this.props.communities}
            exact path="/communities/:communityId"
            component={CommunityContainer}/>
        </div>
      </div>
    ) : (
      <UserMainContainer currentUser={currentUser} />
    );
  }
};

export default UserShow;
