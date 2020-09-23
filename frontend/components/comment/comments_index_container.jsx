import { connect } from "react-redux";
import CommentsIndex from "./comments_index";

const msp = (state, ownProps) => {
  return {
    post: ownProps.post
  }
};

export default connect(msp)(CommentsIndex);