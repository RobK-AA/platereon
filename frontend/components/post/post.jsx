import React from 'react';

class Post extends React.Component {

  render() {
    debugger
    return (
      <>
        <ul>
          {this.props.posts.map((post) => {
            return (
              <li>
                <h4>{post.title}</h4>
                <div>{post.body}</div>
                <div>{post.created_at}</div>
                <div>{post.images}</div>
              </li>
            )
          })}
          {/* <li>Hi</li>
          <li>Hi</li>
          <li>Hi</li> */}
        </ul>
      </>
    );
  }
}

export default Post;