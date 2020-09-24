import React from 'react';
import PostsIndex from '../post/posts_index';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return(
      <>
        <PostsIndex posts={Object.values(this.props.posts)} />
      </>
    )
  }
}

export default Feed;