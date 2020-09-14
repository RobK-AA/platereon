import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.addImage = this.addImage.bind(this);
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

  render() {
    return (
      <div>
        <h4>Post content for your subscribers:</h4>
        <form action="submit">
          <label htmlFor="">Title
            <input type="text" />
          </label>
          <label htmlFor="">Body
            <textarea  />
          </label>
          <label htmlFor="">Upload Content
            <input id="image-input"
              type="file"/>
          </label>
        </form>
      </div>
    );
  }
}

export default PostForm;
