import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { currentUser, location } = this.props;

    return (location.pathname === "/createform") ?
      (<CommunityFormContainer />) :

      (<div className={`${currentUser.name}-page user-page`}>
       
          <div>
            <h2>{currentUser.name}'s Page! Content Coming Soon!</h2>
          </div>
      
      </div>
      
    );
  }
};

export default UserShow;
