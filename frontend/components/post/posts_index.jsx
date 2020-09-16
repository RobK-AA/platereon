import React from 'react';
import PostContainer from './post_container';

const PostsIndex = ({ posts }) => {
  return posts ? (
    <div>
      {posts.map((post, i) => {
        return (
          <PostContainer key={i} post={post} />
        );
      })}
    </div>
  ) : null;
}

export default PostsIndex