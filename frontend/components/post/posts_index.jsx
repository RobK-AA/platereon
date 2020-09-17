import React from 'react';
import PostContainer from './post_container';

const PostsIndex = ({ posts }) => {
  
  return posts ? (
    <div className="post-list-container">
      <div className="post-list-container1">
        <ul className="post-list">
          {posts.reverse().map((post, i) => {
            return (
              <li key={`post-${i}`}>
                <PostContainer key={i} post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;
}

export default PostsIndex