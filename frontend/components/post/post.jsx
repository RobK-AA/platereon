import React from 'react';

class Post extends React.Component {

  render() {
    
  //   return (
  //     <>
  //       <ul className="post-list">
  //         {this.props.posts.map((post) => {
  //           return (
  //             <li>
  //               <h4>{post.title}</h4>
  //               <div>{post.body}</div>
  //               <div>{post.created_at}</div>
  //               <ul className="post-image-list">{post.images.map((image, i) => {
  //                 return (
  //                   <li className="post-image-list-item">
  //                     <img className="post-image" key={i} src={image} />
  //                   </li>
  //                 );
  //               })}</ul>
  //             </li>
  //           )
  //         })}
  //       </ul>
  //     </>
  //   );

    return (
      <div className="post5">
        <div className="post4">
          <div className="post3">
            <div className="post2">
              <div className="post1">
                <div className="post-media">
                  <div className="post-media-container">
                    <img src={this.props.post.images[0]} alt={this.props.post.title}/>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title1">
                    <div className="post-title-date">

                    </div>
                    <div className="post-title-title">
                      <span><a href="">{this.props.post.title}</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;