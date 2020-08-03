import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { currentUser } = this.props;

    return (
      <div className={`${currentUser.name}-page user-page`}>
        <h2>{currentUser.name}'s Page! Content Coming Soon!</h2>
      </div>
    );
  }
};

export default UserShow;
