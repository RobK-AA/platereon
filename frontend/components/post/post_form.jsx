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

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { title, body, imageUrls } = this.state;
    return (
      <div className="new-post-form">
        <form id="post-form" action="submit">
          <h4>Post content for your subscribers:</h4>
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
            <div id="attached-images-outer">
              <div id="attached-images">
                {imageUrls.length ?
                  (<div className="images-attached">
                    {imageUrls.map((url, i) => <img className="post-img" src={url} key={i} />)}
                  </div>) : null
                }
                </div>
            </div>
            
            <div className="post-upload">
              <label htmlFor="">Upload Images/Videos
                <input id="image-input"
                  type="file"
                  onChange={this.addImage}
                />
              </label>
            </div>
            <div className="post-body">
              {/* <label htmlFor="">Body */}
              <div className="post-body-container">
                <textarea  
                  className="post-textarea"
                  onChange={this.handleInput("body")}
                  value={body}
                  placeholder={"What would you like to share with your supporters?"}
                  />
              {/* </label> */}
              </div>
              
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
