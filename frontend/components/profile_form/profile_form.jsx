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
                            <div className="profile-photo2">
                              <div className="profile-photo-left">
                                <label className="profile-photo-left1" htmlFor="">Profile photo</label>
                                <div className="profile-photo-left2">Upload or Use Default</div>
                                <p className="profile-photo-left3">We recommend a 256px by 256px image.</p>
                              </div>
                              <div className="profile-photo-right">
                                <div className="profile-photo-right1">
                                  <div className="profile-photo-right2">
                                    <div className="profile-photo-right3" >
                                      <div className="profile-photo-right4">
                                        <label className="profile-photo-right5" htmlFor="profile-photo">
                                          <div className="photo-input">
                                            <input id="profile-photo" className="photo-input1" type="file"/>
                                          </div>
                                          <div className="photo-input2">
                                            <div className="photo-input3">
                                              <div className="photo-input5">
                                                <span className="photo-input6">
                                                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.333A4.667 4.667 0 1 0 14 8a4.667 4.667 0 0 0 0 9.333z" 
                                                      stroke-linecap="round" stroke-linejoin="round"
                                                    >

                                                    </path>
                                                    <path></path>
                                                  </svg>

                                                </span>
                                                
                                              </div>
                                            </div>
                                            
                                            <div className="photo-input4"></div>
                                          </div>
                                        </label>
                                        
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