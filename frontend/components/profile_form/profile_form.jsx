import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.addPhoto = this.addPhoto.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addPhoto() {
    e.preventDefault();
    const backgroundImage = new FileReader();
    const image = e.target.files[0];

    backgroundImage.onloadend = () => {
      let newImageUrl = this.state.backgroundImageUrl;
      newImageUrl = backgroundImage.result

      let newImage = this.state.backgroundImage;
      newImage = image;

      this.setState({ backgroundImageUrl: newImageUrl, backgroundImage: newImage });
    }

    if (image) {

      backgroundImage.readAsDataURL(image);
    } else {
      alert("Please choose another file type")
    }
  }

  update(field) {
    if (field === "title" || field === "body" || field === "videoUrl") {
      return e => this.setState({ [field]: e.target.value });
    } else if (field === "communityId") {
      return e => this.setState({ [field]: parseInt($("option:selected").attr("name")) });
    }
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