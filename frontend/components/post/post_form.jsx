import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.addImage = this.addImage.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  handleInput(e) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { title, body, imageUrls } = this.state;
    return (
      <div className="new-post-form">
        <h4>Post content for your subscribers:</h4>
        <form action="submit">
          <div className="new-post-form-container">
            <div className="post-title">
              <label htmlFor="">Title
                <input 
                  type="text"
                  value={title}
                  onChange={this.handleInput("title")}
                  />
              </label>
            </div>
            <div className="post-body">
              <label htmlFor="">Body
                <textarea  
                  onChange={this.handleInput("body")}
                  value={body}
                  />
              </label>
              {imageUrls.length ? 
                (<div className="images-attached">
                  {imageUrls.map((url, i) => <img src={url} key={i} />)}
                </div>) : null
              }
            </div>
            <div className="post-upload">
              <label htmlFor="">Upload Content
                <input id="image-input"
                  type="file"
                  onChange={this.addImage}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
