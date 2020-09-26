import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="profile-main-outer1">
          <div className="profile-main-outer2">
            <div className="profile-main">
              <div className="profile-main1">
                <div className="profile-main-left">
                  <div className="profile1">
                    <div className="profile2">
                      <div className="profile3">
                        <div className="profile4">
                          <div className="profile-name1">
                            <div className="profile-name-left">
                              <div className="profile-name-left1">Name</div>
                              <span className="profile-name-left2">Required</span>
                            </div>
                            <div className="profile-name-right">
                              <div className="profile-name-right1">
                                <div className="profile-name-input">
                                  <div className="profile-name-input1">
                                    <div className="profile-name-input2">
                                      <input className="profile-name-input3" type="text"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="profile-name-right2">

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="profile-email1">
                            <div className="profile-email-left">
                              <div className="profile-email-left1">
                                Email
                              </div>
                              <span className="profile-email-left2">
                                Required
                              </span>
                            </div>
                            <div className="profile-email-right">
                              <div className="profile-email-right1">
                                <div className="profile-email-input">
                                  <div className="profile-email-input1">
                                    <div className="profile-email-input2">
                                      <input className="profile-email-input3" type="text" />
                                    </div>
                                  </div>
                                </div>
                                <div className="profile-name-right2">

                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="profile-photo1">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-main-right">

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProfileForm;