import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.addImage = this.addImage.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderDropDown = this.renderDropDown.bind(this);
    this.currentUser = this.props.currentUser;
    this.state = this.props.post
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
            {communities.map((community) => (
              <option name={community.id} value={community.name}>{community.name}</option>
            ))}
          </select>
        </label>
      </>
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
    const { title, body, images, imageUrls } = this.state;
    const authorId = this.props.currentUser.id;
    const communityId = this.state.communityId;
    post.append("post[title]", title)
    post.append("post[body]", body)
    post.append("post[author_id]", authorId)
    post.append("post[community_id]", parseInt($("option:selected").attr("name")))

    const attachedImages = images;

    for (let i = 0; i < attachedImages.length; i++) {
      post.append("post[images][]", attachedImages[i]);
    }
    debugger
    this.props.submitPost(post)
  }

  render() {
    
    const { title, body, imageUrls } = this.state;
    const filledOut = body.length > 0 && title.length > 0;
    return (
      <div className="new-post-form">
        <form id="post-form" action="submit" onSubmit={this.handleSubmit}>
          <h4>Post content for your subscribers:</h4>
          {this.renderDropDown()}
          <div className="new-post-form-container">
            <div className="post-title">
              <label htmlFor="">
                Title
                <input
                  type="text"
                  value={title}
                  onChange={this.update("title")}
                />
              </label>
            </div>
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
            <div className="post-body">
              {/* <label htmlFor="">Body */}
              <div className="post-body-container">
                <textarea
                  className="post-textarea"
                  onChange={this.update("body")}
                  value={body}
                  placeholder={
                    "What would you like to share with your supporters?"
                  }
                />
                {/* </label> */}
              </div>
            </div>
          </div>
          <div className="post-create">
            <button className="post-button" type="submit" disabled={!filledOut}>
              Share
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
