import React from "react";
import Moment from "moment";
import ReactPlayer from "react-player";
import CommentFormContainer from "../comment/comment_form_container";
import CommentsIndexContainer from "../comment/comments_index_container";

class MainFeedPost extends React.Component {
  constructor(props) {
    super(props);
    // this.props.getPosts(this.props.communityId);
    
    if (this.props.post && this.props.post.comments) {
      this.state = {
        likedByCurrentUser: this.props.likedByCurrentUser,
        numComments: this.props.post.comments.length,
      };
    } else {
      this.state = {
        likedByCurrentUser: this.props.likedByCurrentUser,
        numComments: 0,
      };
    }
    this.loadMoreComments = this.loadMoreComments.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  componentWillMount() {
    this.props.getPosts(this.props.communityId);
  }

  componentWillUnmount() {
    this.props.getPosts(this.props.communityId);
    this.props.getMemberships(this.props.currentUser.id);
    this.props.getCurrentUser(this.props.currentUser.id);
  }

  renderUnlike() {
    return (
      <>
        <img
          onClick={this.handleLike}
          src="https://img.icons8.com/fluent/20/000000/filled-like.png"
        />
      </>
    );
  }

  renderLike() {
    return (
      <>
        <img
          onClick={this.handleLike}
          src="https://img.icons8.com/material-outlined/20/000000/filled-like.png"
        />
      </>
    );
  }

  handleLike(e) {
    e.preventDefault();
    const { currentUser, likeId } = this.props;
    const id = this.props.post.id;
    if (!this.props.likedByCurrentUser) {
      this.props
        .likePost({
          liker_id: currentUser.id,
          likeable_id: id,
          likeable_type: "Post",
        })
        .then(
          this.setState({
            likedByCurrentUser: true,
          })
        );
    } else {
      this.props.unlikePost(likeId).then(
        this.setState({
          likedByCurrentUser: false,
        })
      );
    }
  }

  renderFirstComment() {
    let comments;
     if (this.props.posts[this.props.post.id]) {
       comments = Object.values(this.props.posts[this.props.post.id].comments).reverse();
     }
    debugger
    const firstCommentName = comments[0].author.name;
    const firstCommentBody = comments[0].body;
    const createdAt = comments[0].created_at;

    let date = new Moment(createdAt);

    let days = `${parseInt(date.fromNow())}d`;
    let hours = `${parseInt(date.fromNow())}h`;
    let minutes = `${parseInt(date.fromNow())}m`;
    let seconds = `${parseInt(date.fromNow())}s`;
    let time = days;

    if (date.fromNow().includes("day")) time = days;
    if (date.fromNow().includes("hour")) time = hours;
    if (date.fromNow().includes("minute")) time = minutes;
    if (date.fromNow().includes("second")) time = seconds;
    if (date.fromNow().includes("in ")) time = "just posted";
    if (date.fromNow().includes("day ago")) time = "1d";

    return comments ? (
      <>
        <div className="comment-outer1">
          <div className="comment-outer2">
            <div className="comment-left">
              <div className="commenter-logo">
                <div className="commenter-logo1">
                  <span className="commenter-log2">
                    <div className="commenter-logo3"></div>
                  </span>
                </div>
              </div>
              <div className="comment-body">
                <div className="comment-body-name">
                  <div className="comment-body-name1">{firstCommentName}</div>
                </div>
                <div className="comment-body-body">
                  <p>
                    <span>{firstCommentBody}</span>
                  </p>
                </div>
                <div className="comment-body-icons">
                  <div className="comment-body-icons-left">
                    <img src="https://img.icons8.com/material-outlined/16/000000/filled-like.png" />
                  </div>
                  <div className="comment-body-icons-right">
                    <img src="https://img.icons8.com/ios/16/000000/reply-arrow.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-right">
              <span>
                <div className="comment-time">{time}</div>
              </span>
            </div>
          </div>
        </div>
      </>
    ) : null;
  }

  renderSecondComment() {
    let comments;
    if (this.props.posts[this.props.post.id]) {
      comments = Object.values(
        this.props.posts[this.props.post.id].comments
      ).reverse();
    }

    const secondCommentName = comments[1].author.name;
    const secondCommentBody = comments[1].body;
    const createdAt = comments[1].created_at;
    let date = new Moment(createdAt);
    let days = `${parseInt(date.fromNow())}d`;
    let hours = `${parseInt(date.fromNow())}h`;
    let minutes = `${parseInt(date.fromNow())}m`;
    let seconds = `${parseInt(date.fromNow())}s`;
    let time = days;

    if (date.fromNow().includes("day")) time = days;
    if (date.fromNow().includes("hour")) time = hours;
    if (date.fromNow().includes("minute")) time = minutes;
    if (date.fromNow().includes("second")) time = seconds;
    if (date.fromNow().includes("in ")) time = "just posted";
    if (date.fromNow().includes("day ago")) time = "1d";

    return (
      <>
        <div className="comment-outer1">
          <div className="comment-outer2">
            <div className="comment-left">
              <div className="commenter-logo">
                <div className="commenter-logo1">
                  <span className="commenter-log2">
                    <div className="commenter-logo3"></div>
                  </span>
                </div>
              </div>
              <div className="comment-body">
                <div className="comment-body-name">
                  <div className="comment-body-name1">{secondCommentName}</div>
                </div>
                <div className="comment-body-body">
                  <p>
                    <span>{secondCommentBody}</span>
                  </p>
                </div>
                <div className="comment-body-icons">
                  <div className="comment-body-icons-left">
                    <img src="https://img.icons8.com/material-outlined/16/000000/filled-like.png" />
                  </div>
                  <div className="comment-body-icons-right">
                    <img src="https://img.icons8.com/ios/16/000000/reply-arrow.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-right">
              <span>
                <div className="comment-time">{time}</div>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }

  loadMoreComments() {
    $(`.comments-${this.props.post.id}`).css({
      display: "block",
    });
  }

  render() {
    const { id, title, body, likes } = this.props.post;
    let images;

    if (this.props.posts[this.props.post.id]) {
      images = this.props.posts[this.props.post.id].images;
    }
      
    const createdAt = this.props.post.created_at;
    const videoUrl = this.props.post.video_url;
    
    let date = new Moment(createdAt);
    let comments;
    let numLikes;

    if (likes) {
      numLikes = Object.values(likes).length;
    } else {
      numLikes = 0;
    }

    if (
      this.props.posts[this.props.post.id] &&
      this.props.posts[this.props.post.id].comments
    ) {
      comments = Object.values(this.props.posts[this.props.post.id].comments);
    }

    let imgStyle;
    if (images && images.length) {
      imgStyle = { display: "block" };
    } else {
      imgStyle = { display: "none" };
    }
    
    return (
      <div className="post5">
        <div className="post4">
          <div className="post3">
            <div className="post2">
              <div className="post1">
                <div className="post-media">
                  <div className="post-media-container">
                    {(images && images.length) ? (
                      <ul>
                        {images.map((image, i) => (
                          <img key={i} src={image} />
                        ))}
                      </ul>
                    ) : null}
                    {videoUrl ? (
                      <ReactPlayer className="react-player" url={videoUrl} />
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
                            Unlocked
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
                            {this.state.likedByCurrentUser
                              ? this.renderUnlike()
                              : this.renderLike()}
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
                            {`${numLikes} `}
                            {numLikes === 1 ? `Like` : `Likes`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-comments">
                    <div className="post-comments1">
                      <div onClick={this.loadMoreComments}>
                        {comments
                          ? comments.length > 2
                            ? "Load more comments"
                            : "Add a comment"
                          : "Be the first to comment"}
                      </div>
                      <span>
                        {comments ? (comments.length > 1 ? "2" : "1") : "0"} of{" "}
                        {comments && comments.length ? comments.length : "0"}
                      </span>
                    </div>
                    <div className="post-comments2">
                      {comments ? this.renderFirstComment() : null}
                    </div>
                    <div id="commentsPreview" className="post-comments3">
                      {comments && comments.length > 1
                        ? this.renderSecondComment()
                        : null}
                    </div>
                    <div
                      className={`more-comments comments-${this.props.post.id}`}
                    >
                      <CommentsIndexContainer post={this.props.post} />
                    </div>

                    <div className="post-comments4">
                      <div className="post-comments41">
                        <div className="post-comments-logo">
                          <div className="post-comments-logo1">
                            <div className="post-comments-logo2"></div>
                          </div>
                        </div>
                        <CommentFormContainer
                          postId={this.props.post.id}
                          commentableType="Post"
                          commentableId={id}
                        />
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

export default MainFeedPost;
