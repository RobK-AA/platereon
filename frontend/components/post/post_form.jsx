import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props)
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
            <input type="textarea" />
          </label>
        </form>
      </div>
    );
  }
}

export default PostForm;
