import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, body, images } = this.props.post;

    let imgStyle;
    if (images.length) {
      imgStyle = { display: "block"}
    } else {
      imgStyle = { display: "none"}
    }
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
                    {images.length ? 
                      (<ul>
                       {images.map((image, i) => <img key={i} src={image} />)}
                      </ul>) : null
                    }
                    {/* <img style={imgStyle} src={images[0]} alt={this.props.post.title}/> */}
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title1">
                    <div className="post-title-date">
                      <div className="post-title-date1">
                        <div className="post-datetime">
                          {/* {this.props.post.created_at} */}
                        </div>
                        <div className="unlocked">

                        </div>
                      </div>
                    </div>
                    <div className="post-title-title">
                      <span><a href="">{title}</a></span>
                    </div>
                  </div>
                  <div className="post-body1">
                    <p className="post-body2">{body}</p>
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