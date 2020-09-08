import React from 'react';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { receiveResults } from '../../actions/search_actions';
import { connect } from 'react-redux';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.state = {
      query: ""
    }
  }

  useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  handleSubmit(e) {
    
    debugger
    e.preventDefault();
    const { query } = this.state;
    
    this.props.search(query).then(this.props.history.push(`/communities?search=${query}`));
    
    console.log(query);
  }

  update() {
    return (e) => {
      this.setState({
        query: e.currentTarget.value,
      });
    };
  }

  renderSearchResults() {
    let q = this.useQuery();
    return (
      <div>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/communities?search=foo">Foo User</Link>
            </li>
            <li>
              <Link to="/account?name=bar">Bar User</Link>
            </li>
            <li>
              <Link to="/account?name=baz">Baz User</Link>
            </li>
          </ul>
          <User name={q.get("name")} />
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Search.."
            onChange={this.update()}
            ></input>
        </form>
      </div>
    )
  }
}

const mdp = dispatch => ({
  search: (keyword) => dispatch(receiveResults(keyword))
})
export default connect(null, mdp)(Search);

