import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.addPhoto = this.addPhoto.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: this.props.currentUser.name,
      email: this.props.currentUser.email,
      profilePhoto: null,
      profilePhotoUrl: "https://c8.patreon.com/2/200/c5055377",
      errors: {}
    };
  }

  addPhoto(e) {
    e.preventDefault();
    const profilePhoto = new FileReader();
    const photo = e.target.files[0];

    profilePhoto.onloadend = () => {
      let newPhotoUrl = this.state.profilePhotoUrl;
      newPhotoUrl = profilePhoto.result

      let newPhoto = this.state.profilePhoto;
      newPhoto = photo;

      this.setState({ profilePhotoUrl: newPhotoUrl, profilePhoto: newPhoto });
    }

    if (photo) {

      profilePhoto.readAsDataURL(photo);
    } else {
      alert("Please choose another file type")
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {

    e.preventDefault();
    const post = new FormData();
    const { title, body, images, imageUrls, videoUrl } = this.state;
    const authorId = this.props.currentUser.id;
    const communityId = this.state.communityId;
    post.append("post[title]", title)
    post.append("post[body]", body)
    post.append("post[author_id]", authorId)
    post.append("post[community_id]", parseInt($("option:selected").attr("name")))
    post.append("post[video_url]", videoUrl)

    const attachedImages = images;

    for (let i = 0; i < attachedImages.length; i++) {
      post.append("post[images][]", attachedImages[i]);
    }

    this.props
      .submitPost(post)
      .then(
        this.props.history.push(
          `/communities/${parseInt($("option:selected").attr("name"))}`,
          this.state
        )
      );
  }
  render() {
    debugger
    return(
      <>
        <div className="profile-main-outer1">
          <div className="profile-main-outer2">
            <div className="profile-main">
              
                <div className="profile-main1">
                  <div className="profile-main-left">
                  <form id="profile-form">
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
                                        <input defaultValue={this.props.currentUser.name}className="profile-name-input3" type="text"/>
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
                                        <input defaultValue={this.props.currentUser.email} className="profile-email-input3" type="text" />
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
                                  <div className="profile-photo-left2">Upload or use default</div>
                                  <p className="profile-photo-left3">We recommend a 256px by 256px image.</p>
                                </div>
                                <div className="profile-photo-right">
                                  <div className="profile-photo-right1">
                                    <div className="profile-photo-right2" style={{ backgroundImage: `url(${this.state.profilePhotoUrl})` }} >
                                      <div className="profile-photo-right3" >
                                        <div className="profile-photo-right4">
                                          <label className="profile-photo-right5" htmlFor="profile-photo">
                                            <div className="photo-input">
                                              <input onChange={this.addPhoto} id="profile-photo" className="photo-input1" type="file"/>
                                            </div>
                                            <div className="photo-input2">
                                              <div className="photo-input3">
                                                <div className="photo-input5">
                                                  <span className="photo-input6">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M14 17.333A4.667 4.667 0 1 0 14 8a4.667 4.667 0 0 0 0 9.333z" 
                                                        strokeLinecap="round" strokeLinejoin="round"
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
                    </form>
                  </div>
                  <div className="profile-main-right">
                    <div className="profile-main-right1">
                      <div className="profile-main-right2">
                        <div className="profile-main-right3">
                          <button type="submit" form="profile-form" className="profile-main-right4">
                            <div className="profile-main-right5">Save changes</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProfileForm;