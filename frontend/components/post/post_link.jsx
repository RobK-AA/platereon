import React from 'react';
import Link from 'react-router-dom';

const PostLink = () => {
  return (
    <>
    <div className="mid-panel1">
      <div className="mid-panel2">
        <div className="mid-panel3">
          <div className="mid-pane4">
            <div className="mid-panel5">
              <div className="mid-panel6">
                <div className="upper-right-title">
                  <div className="ur-title1">
                    <div className="ur-title2">
                      <h5 className="ur-title">Become a creator</h5>
                    </div>
                  </div>
                </div>
                <p className="upper-right-text">
                  Build a membership for your fans and get paid to create on
                  your own terms.
                </p>
                <div className="get-started-link">
                  <Link className="main-create-link" to={`/createform`}>
                    <p className="main-create2"> Get started</p>
                    <div className="main-create1">
                      <div className="main-create2"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PostLink;