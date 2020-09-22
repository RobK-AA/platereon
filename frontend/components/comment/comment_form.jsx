import React from "react";
import { merge } from "lodash";

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.submitComment = this.submitComment.bind(this);
    this.state = this.props.comment;
  }

  submitComment(e) {
    
    if (e.key === 'Enter' || e.which === 13) {
      e.preventDefault();
      const newBody = $(e.target);
      const comment = merge({}, this.props.comment, { body: newBody.val() });
  
      this.props.submitComment(comment).then(() => {
        newBody.attr("placeholder", "Join the conversation...").placeholder()
      }).then(() => { 

          this.setState({
            body: ""
          })
        })
        /*.then(() => {
          this.props.rerenderParentCallback();
        })*/
    }
  }

  render() {
    return (
      <>
        <div className="post-comments-comment">
          <form onSubmit={this.submitComment}>
            <textarea role="textbox" onKeyPress={this.submitComment}
            type="text" rows="1" placeholder="Join the conversation..." id="" cols="30" rows="1"></textarea>
          </form>
        </div>
      </>
    )
  }
}

export default CommentForm;