import React from 'react';
import MainPageContainer from '../main_page/main_page_container';
import UserShowContainer from '../user_show/user_show_container';

class Body extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    const { currentUser, location } = this.props;

    return (

      <div className="outer-main">
        {(location.pathname === "/login") || (location.pathname === "/signup") ?
        null :
        currentUser ? <UserShowContainer /> : <MainPageContainer />
        }
      </div>
    )
  }
};

export default Body;
