import React from "react";
import { merge } from "lodash";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitComment = this.submitComment.bind(this);
    this.background = this.background.bind(this);
    this.revertBackground = this.revertBackground.bind(this);
    this.state = this.props.comment;
  }

  submitComment(e) {
    if (e.key === "Enter" || e.which === 13) {
      e.preventDefault();
      const newBody = $(e.target);
      const comment = merge({}, this.props.comment, { body: newBody.val() });

      this.props
        .submitComment(comment)
        .then(() => {
          newBody.attr("placeholder", "Join the conversation...");
        })
        .then(
          this.setState({
            body: "",
          })
        );
    }
  }

  componentWillUnmount() {
    this.props.getMemberships(this.props.currentUser.id);
    // this.props.getCurrentUser(this.props.currentUser.id);
    // this.props.getCommunities();
  }

  background() {
    $(`.${this.props.postId}`).css({
      "border-color": "rgb(0, 76, 129)",
      "border-width": "1px",
      "border-style": "solid",
      background: "white",
    });
  }

  revertBackground() {
    $(`.${this.props.postId}`).css({
      "border-color": "#e5e3dd",
      "border-width": "1px",
      "border-style": "solid",
      "background-color": "#f5f4f2",
    });
  }

  render() {
    return (
      <>
        <div className="post-comments-comment">
          <form>
            <textarea
              className={this.props.postId}
              onFocus={this.background}
              onBlur={this.revertBackground}
              role="textbox"
              onKeyPress={this.submitComment}
              type="text"
              placeholder="Join the conversation..."
              id={this.props.postId}
              cols="30"
              rows="1"
            ></textarea>
          </form>
        </div>
      </>
    );
  }
}

export default CommentForm;