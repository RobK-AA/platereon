import React from 'react';
// import Moment from 'react-moment';
import Moment from "moment";
import ReactPlayer from 'react-player';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.renderLike = this.renderLike.bind(this);
    this.renderUnlike = this.renderUnlike.bind(this);
  }

  renderUnlike() {
    return (
      <>
        <img src="https://img.icons8.com/fluent/20/000000/filled-like.png" />
      </>
    )
  }

  renderLike() {
    return (
      <>
        <img src="https://img.icons8.com/material-outlined/20/000000/filled-like.png" />
      </>
    )
  }

  render() {

    const { title, body, images } = this.props.post;
    const createdAt = this.props.post.created_at;
    const videoUrl = this.props.post.video_url;
    const  { currentUserIsMember } = this.props;
    let date = new Moment(createdAt);

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
                    {images.length ? (
                      <ul>
                        {images.map((image, i) => (
                          <img key={i} src={image} />
                        ))}
                      </ul>
                    ) : null}
                    {videoUrl ? (
                      <ReactPlayer
                        className="react-player"
                        url={videoUrl}
                        // width="850px"
                        // height="400px"
                      />
                    ) : null}
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title1">
                    <div className="post-title-date">
                      <div className="post-title-date1">
                        <div className="post-datetime">
                          <div className="post-datetime1">
                            <span className="post-datetime2">
                              {date.format("ll")} at {date.format("LT")}
                            </span>
                          </div>
                        </div>
                        <div className="unlocked">
                          <div className="unlocked1">
                            <div className="lock-image">
                              <div className="lock-image1">
                                <span>
                                  <img
                                    className="lock-image2"
                                    src="https://img.icons8.com/metro/10/000000/unlock.png"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="lock-status">
                            {currentUserIsMember ? "Unlocked" : "Locked"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="post-title-title">
                      <span>
                        <a href="">{title}</a>
                      </span>
                    </div>
                  </div>
                  <div className="post-body1">
                    <p className="post-body2">{body}</p>
                  </div>
                  <div className="post-lower">
                    <div className="post-lower1">
                      <div className="post-lower-left">
                        <div className="post-lower-left1">
                          <div className="post-lower-leftL">
                            {this.renderLike()}
                          </div>
                          <div className="post-lower-leftM">
                            <img src="https://img.icons8.com/ios/20/000000/upload.png" />
                          </div>
                          <div className="post-lower-leftR">
                            <img src="https://img.icons8.com/windows/20/000000/ellipsis.png" />
                          </div>
                        </div>
                      </div>
                      <div className="post-lower-right">
                        <div className="post-lower-right1">
                          <div className="like-counter">
                            0 Likes
                          </div>
                        </div>
                      </div>
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