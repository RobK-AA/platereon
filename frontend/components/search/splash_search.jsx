import React from "react";
import {
  withRouter,
  Link,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import { receiveResults } from "../../actions/search_actions";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      query: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { query } = this.state;
    this.props
      .search(query)
      .then(this.props.history.push(`/search?=${query}`, this.state))
      .then(
        this.setState({
          query: "",
        })
      );
  }

  update() {
    return (e) => {
      this.setState({
        query: e.currentTarget.value,
      });
    };
  }

  render() {
    return (
      <div className="search-main4">
        <div className="search-main3">
          <div className="search-main2">
            <div className="search-main1">
              <div className="search-main-title5">
                <div className="search-main-title4">
                  <div className="search-main-title3">
                    <div className="search-main-title2">
                      <div className="search-main-title1">
                        <h2 className="search-title-text">
                          Search the creators on Platereon
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-main-inner4">
                <div className="search-main-inner3">
                  <div className="search-main-inner2">
                    <div className="search-main-inner1">
                      <div id="nav-search">
                        <form action="submit" onSubmit={this.handleSubmit}>
                          <div className="main-search-container">
                            <input
                              className="main-search-input"
                              type="text"
                              placeholder="Find a creator you love"
                              onChange={this.update()}
                              value={this.state.query}
                            ></input>
                          </div>
                        </form>
                      </div>
                      <div className="search-main-button">
                        <div onClick={this.handleSubmit} id="main-page-search-button">
                          <div className="search-main-button1"></div>
                          <div className="search-main-button2">Search</div>
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

const msp = (state) => ({});

const mdp = (dispatch) => ({
  search: (keyword) => dispatch(receiveResults(keyword)),
});

export default withRouter(connect(msp, mdp)(Search));
