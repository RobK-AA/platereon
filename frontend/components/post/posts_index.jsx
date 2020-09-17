import React from 'react';
import PostContainer from './post_container';

const PostsIndex = ({ posts }) => {
  
  return posts ? (
    <div className="post-list-container">
      <div className="post-list-container1">
        <ul className="post-list">
          {posts.map((post, i) => {
            return (
              <li>
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