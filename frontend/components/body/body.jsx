import React from 'react';
import MainPageContainer from '../main_page/main_page_container';
import UserShowContainer from '../user_show/user_show_container';
import GreetingContainer from '../greeting/greeting_container';

class Body extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        {/* <GreetingContainer /> */}
        {currentUser ? <UserShowContainer /> : <MainPageContainer />}
      </div>
    )
  }
};

export default Body;
