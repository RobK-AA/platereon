import React from "react";
import { merge } from "lodash";

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.submitComment = this.submitComment.bind(this);
    // this.updatePostComment = this.updatePostComment.bind(this);
  }

  submitComment(e) {
    
    if (e.key === 'Enter' || e.which === 13) {
      e.preventDefault();
      const newBody = $(e.target);
      const comment = merge({}, this.props.comment, { body: newBody.text() });
      
      this.props.submitComment(comment).then(() => {
        newBody.text("Join the conversation...")
      });
    }
  }

  // updatePostComment() {
  //   return e => this.setState({
  //       body: e.target.value,
  //   })
  // }

  render() {
    return (
      <>
        <div className="post-comments-comment">
          <form onSubmit={this.submitComment}>
            <p role="textbox" contentEditable onKeyPress={this.submitComment}
            type="text" rows="1" placeholder="Join the conversation..." id="" cols="30" rows="10"></p>
          </form>
        </div>
      </>
    )
  }
}

export default CommentForm;