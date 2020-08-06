import React from 'react';
import CommunityFormContainer from '../community_form/community_form_container'
import { Route } from 'react-router-dom';
import CommunityContainer from '../community/community_container'

class UserMain extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { currentUser, location } = this.props;

    return (
          <h3>{currentUser.name}, welcome to Platereon, you awesome awesome person!</h3>
      )
  }
};

export default UserMain;
