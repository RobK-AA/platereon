import React from 'react';

class Post extends React.Component {

  render() {
    debugger
    return (
      <>
        <ul className="post-list">
          {this.props.posts.map((post) => {
            return (
              <li>
                <h4>{post.title}</h4>
                <div>{post.body}</div>
                <div>{post.created_at}</div>
                <ul className="post-image-list">{post.images.map((image, i) => {
                  return (
                    <li className="post-image-list-item">
                      <img className="post-image" key={i} src={image} />
                    </li>
                  );
                })}</ul>
              </li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default Post;