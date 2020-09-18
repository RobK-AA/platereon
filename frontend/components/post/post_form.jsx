import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.addImage = this.addImage.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.renderImageForm = this.renderImageForm.bind(this);
    this.renderVideoUrlForm = this.renderVideoUrlForm.bind(this);
    this.currentUser = this.props.currentUser;
    this.state = this.props.post;
    this.state.imageUrls = [];
  }

  addImage(e) {
    e.preventDefault();
    const images = new FileReader();
    const image = e.target.files[0];
    
    images.onloadend = () => {
      let newImageUrls = this.state.imageUrls;
      newImageUrls.push(images.result)

      let newImages = this.state.images;
      newImages.push(image);

      this.setState({ imageUrls: newImageUrls, images: newImages });
    }

    if (image) {
      images.readAsDataURL(image);
    } else {
      alert("Please choose another file type")
    }
  }

  renderDropDown() {
    const communities = this.currentUser.communities_created;
    
    return (
      <>
        <label htmlFor="communities-dropdown">
          <select onChange={this.handleSelect} id="communities-dropdown">
            <option defaultValue="selected">Select One of Your Communities</option>
            {communities.map((community, i) => (
              <option key={i} name={community.id} value={community.name}>{community.name}</option>
            ))}
          </select>
        </label>
      </>
    );
  }

  renderImageForm() {
    const { imageUrls } = this.state;
    return (
      <>
      <div id="attached-images-outer">
        <div id="attached-images">
          {imageUrls.length ? (
            <div className="images-attached">
              {imageUrls.map((url, i) => (
                <img className="post-img" src={url} key={i} />
              ))}
            </div>
          ) : null}
        </div>
      </div>

            <div className="post-upload">
              <label htmlFor="">
                Upload Pictures
                <input id="image-input" type="file" onChange={this.addImage} />
              </label>
            </div>
            </>)
  }
  
  renderVideoUrlForm() {
    const { videoUrl } = this.state;

    return (
      <div className="video-input">
        <label htmlFor="">
          Add a video URL
          <input id="image-input" type="text" onChange={this.update("videoUrl")} />
        </label>
      </div>
    );
  }

  handleSelect(e) {
    e.preventDefault();
    const id = parseInt($("option:selected").attr("name"));
    (e) => this.setState({ communityId: id });
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

    const { title, body, imageUrls } = this.state;
    const filledOut = body.length > 0 && title.length > 0;

    const textPost = this.props.location.pathname.includes('text');
    const imagePost = this.props.location.pathname.includes('images');
    const videoPost = this.props.location.pathname.includes('video');
    const linkPost = this.props.location.pathname.includes("link");

    return (
      // <div className="new-post-form">
      //   <form id="post-form" action="submit" onSubmit={this.handleSubmit}>
      //     <h4>Post content for your subscribers:</h4>
      //     {this.renderDropDown()}
      //     <div className="new-post-form-container">
      //       <div className="post-title">
      //         <label htmlFor="">
      //           Title
      //           <input
      //             type="text"
      //             value={title}
      //             onChange={this.update("title")}
      //           />
      //         </label>
      //       </div>
      //       {imagePost ? this.renderImageForm() : null}
      //       {videoPost ? this.renderVideoUrlForm() : null}
      //       <div className="post-body">
      //         {/* <label htmlFor="">Body */}
      //         <div className="post-body-container">
      //           <textarea
      //             className="post-textarea"
      //             onChange={this.update("body")}
      //             value={body}
      //             placeholder={
      //               "What would you like to share with your supporters?"
      //             }
      //           />
      //           {/* </label> */}
      //         </div>
      //       </div>
      //     </div>
      //     <div className="post-create">
      //       <button className="post-button" type="submit" disabled={!filledOut}>
      //         Share
      //       </button>
      //     </div>
      //   </form>
      // </div>
      <div className="text-form1">
        <div className="text-form2">
          <div className="text-form3">
            <div className="text-form4">
              <div className="text-form5">
                <div className="text-form6">
                  <div className="text-form7">
                    <div className="text-form8">
                      <div className="text-form9">
                        <div className="text-form10">
                          <div className="text-form-left">
                            <div className="text-form-left1">
                              <div className="text-form-left2">
                                <div className="text-form-left3">
                                  <div className="text-form-left4">
                                    <div className="text-post-type">
                                      <div className="text-post-type-img">
                                        <img src="https://img.icons8.com/office/16/000000/lowercase.png" />
                                      </div>
                                      <span className="text-form-type-text">
                                        Text
                                      </span>
                                    </div>
                                    <div className="text-post-x">
                                      <div className="text-post-x1">
                                        <span className="text-post-x2">X</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-form-left41"></div>
                                  <div className="text-form-title">
                                    <div className="text-form-title1">
                                      <div className="text-form-title-input1">
                                        <input
                                          className="text-form-title-input1"
                                          type="text"
                                          placeholder="Post title (required)"
                                        />
                                      </div>
                                      <div className="text-form-title2">
                                        <div className="text-form-title3"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-form-post"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-form-right"></div>
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
    );
  }
}

export default PostForm;
