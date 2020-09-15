import React from "react";
import CommunityFormContainer from "../community_form/community_form_container";
import { Route, Link } from "react-router-dom";
import CommunitiesReducer from "../../reducers/communities_reducer";
import community_container from "../community/community_container";
import { PostLink } from "../post/post_link";
import { connect } from "react-redux";

class PostCover extends React.Component {

  render() {
    return (
      <div className="post-cover1">
        <div className="post-cover2">
          <div className="post-cover3">
            <div className="post-cover4">
              <div className="post-cover5">
                <div className="post-cover6">
                  <div className="post-cover7">
                    <div className="post-cover8">
                      <div className="post-cover9">
                        <div className="post-cover10">
                          <div className="post-type1">
                            <div className="post-type2">
                              <div className="post-type3">
                                <div className="post-type4">
                                  <h3 className="post-type5">
                                    Choose post type
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-cover11"></div>
                        <div className="post-types">
                          <div className="posts post-text">
                            <div className="posts-img post-text">
                              <span>
                                <img src="https://img.icons8.com/office/40/000000/lowercase.png" />
                              </span>
                            </div>
                            <div className="posts-text post-text">
                              <span>Text</span>
                            </div>
                          </div>
                          <div className="posts post-images">
                            <div className="posts-img post-images">
                              <img src="https://img.icons8.com/nolan/40/google-images.png" />
                            </div>
                            <div className="posts-text post-images">
                              <span>Images</span>
                            </div>
                          </div>
                          <div className="posts post-video">
                            <div className="posts-img post-video">
                              <img src="https://img.icons8.com/color/40/000000/video.png" />
                            </div>
                            <div className="posts-text post-video">
                              <span>Video</span>
                            </div>
                          </div>
                          <div className="posts post-audio">
                            <div className="posts-img post-audio">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 172 172"
                              >
                                <g
                                  fill="none"
                                  fill-rule="nonzero"
                                  stroke="none"
                                  stroke-width="1"
                                  stroke-linecap="butt"
                                  stroke-linejoin="miter"
                                  stroke-miterlimit="10"
                                  stroke-dasharray=""
                                  stroke-dashoffset="0"
                                  font-family="none"
                                  font-weight="none"
                                  font-size="none"
                                  text-anchor="none"
                                >
                                  <path
                                    d="M0,172v-172h172v172z"
                                    fill="none"
                                  ></path>
                                  <g fill="#3498db">
                                    <path d="M86,16.25885c-27.14375,0 -51.4651,16.12448 -61.94635,41.11823c-5.10625,11.95937 -5.50938,25.6672 -1.34375,38.5672l8.60052,26.33697c0.67188,2.15 2.95468,3.22553 5.10468,2.55365c2.15,-0.67187 3.22553,-2.9573 2.55365,-5.1073l-8.60053,-26.20312c-3.49375,-11.01875 -3.22447,-22.84322 1.2099,-33.05572c9.27188,-21.90313 30.6375,-36.1474 54.42188,-36.1474c24.32187,0 46.49322,15.18595 55.2276,37.89532c3.62813,9.40625 3.89635,20.28958 0.80573,30.50208l-8.19635,27.00885c-0.67187,2.15 0.5375,4.43595 2.6875,4.97345c0.40312,0.13437 0.80677,0.13385 1.2099,0.13385c1.74687,0 3.3599,-1.07448 3.8974,-2.82135l8.19635,-27.01147c3.62813,-11.95937 3.22395,-24.5901 -1.07605,-35.74323c-9.80937,-25.66562 -35.07083,-43 -62.75208,-43zM38.43072,90.43542c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28438 1.74688,4.03125 4.03125,4.03125h7.25678v39.50415h-13.97553c-3.7625,0 -6.8526,-3.0901 -6.8526,-6.8526v-20.42395c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125v27.1427c0,8.19688 6.71822,14.9151 14.9151,14.9151h15.72345c3.35938,0 6.18073,-2.82135 6.18073,-6.18073v-49.98645c0,-3.35937 -2.82135,-6.18073 -6.18073,-6.18073zM124.70105,90.43542c-3.35937,0 -6.18335,2.82135 -6.18335,6.18073v49.98645c0,3.35938 2.82397,6.18073 6.18335,6.18073h15.72083c8.19688,0 14.78125,-6.71823 14.78125,-14.9151v-25.79895c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125v19.0802c0,3.7625 -3.0901,6.8526 -6.8526,6.8526h-13.84167v-39.50415h7.25678c2.28438,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28437 -1.74687,-4.03125 -4.03125,-4.03125z"></path>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="posts-text post-audio">
                              <span>Audio</span>
                            </div>
                          </div>
                          <div className="posts post-link">
                            <div className="posts-img post-link">
                              <img src="https://img.icons8.com/office/40/000000/link.png" />
                            </div>
                            <div className="posts-text post-link">
                              <span>Link</span>
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
      </div>
    );
  }
}

const msp = (state) => ({
  urrentUser: state.entities.users[state.session.id],
});

export default connect(msp)(PostCover);