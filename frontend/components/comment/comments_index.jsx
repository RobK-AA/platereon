import React from 'react';
import Comment from './comment';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let comments;
    if (this.props.post.comments) {
      comments = Object.values(this.props.post.comments).reverse().slice(2);
    }
    
    return (
      <>
        {this.props.post.comments ? 
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} post={this.props.post}/>
        )) : null
      }
      </>
    )
  }
  
}

export default CommentsIndex