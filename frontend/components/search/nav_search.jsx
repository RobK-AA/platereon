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
      <div id="nav-search">
        <form action="submit" onSubmit={this.handleSubmit}>
          <div className="main-search-container">
            <input
              className="main-search-input"
              type="text"
              placeholder="Find a creator"
              onChange={this.update()}
              value={this.state.query}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

const msp = (state) => ({});

const mdp = (dispatch) => ({
  search: (keyword) => dispatch(receiveResults(keyword)),
});

export default withRouter(connect(msp, mdp)(Search));
