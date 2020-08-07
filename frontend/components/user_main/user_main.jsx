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
          <div className="user-main5">
            <div className="user-main4">
              <div className="user-main3">
                <div className="user-main2">
                  <div className="user-main1">
                    <div className="left-panel5">
                     <div className="left-panel4">
                        <div className="left-panel3">
                          <div className="left-panel2">
                            <div className="left-panel1">
                              <div className="main-logo-outer-frame">
                                <div className="main-logo-outer">
                                  <div className="main-logo-container">
                                    <div className="main-logo">
                                    </div>
                                    <div className="user-main-name-container">
                                      <span className="user-main-name">{currentUser.name}</span>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
  }
};

export default UserMain;
