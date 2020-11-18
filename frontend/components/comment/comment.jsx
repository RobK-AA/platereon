import React from 'react';
import Moment from "moment";
import { connect } from 'react-redux';

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { comment } = this.props;
    const createdAt = comment.created_at;
    let date = new Moment(createdAt);
    let months = `${parseInt(date.fromNow())}m`;
    let weeks = `${parseInt(date.fromNow())}w`;
    let days = `${parseInt(date.fromNow())}d`;
    let hours = `${parseInt(date.fromNow())}h`;
    let minutes = `${parseInt(date.fromNow())}m`;
    let seconds = `${parseInt(date.fromNow())}s`;
    let time = days;

    if (date.fromNow().includes("month")) time = months;
    if (date.fromNow().includes("week")) time = weeks;
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
                    <div
                      style={
                        comment.author.profile_photo
                          ? {
                              backgroundImage: `url(${comment.author.profile_photo})`,
                            }
                          : {
                            backgroundImage: `url("https://c8.patreon.com/2/200/c5055377")`,
                            }
                      }
                      className="commenter-logo3"
                    ></div>
                  </span>
                </div>
              </div>
              <div className="comment-body">
                <div className="comment-body-name">
                  <div className="comment-body-name1">
                    {comment.author.name}
                  </div>
                </div>
                <div className="comment-body-body">
                  <p>
                    <span>{comment.body}</span>
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
}

const msp = (state, ownProps) => ({
  comment: ownProps.comment,
  post: ownProps.post
})

export default connect(msp)(Comment);