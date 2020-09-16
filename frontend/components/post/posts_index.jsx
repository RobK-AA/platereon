import React from 'react';
import PostsContainer from './post_container';

const PostsIndex = ({ posts }) => {
  return posts ? (
    <div>
      {posts.map((post, i) => {
        return (
          <PostsContainer key={i} post={post} />
        );
      })}
    </div>
  ) : null;
}

export default PostsIndex