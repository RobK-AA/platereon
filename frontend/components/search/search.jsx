import React from 'react';
import { Link } from 'react-router-dom'
import { receiveResults } from '../../actions/search_actions';
import { connect } from 'react-redux';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      query: ""
    }
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const { query } = this.state;
    
    this.props.search(query).then(this.props.history.push(`/search?color=${query}`));
    
    console.log(query);
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
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Search.."
            onChange={this.update()}></input>
        </form>
      </div>
    )
  }
}

const mdp = dispatch => ({
  search: (keyword) => dispatch(receiveResults(keyword))
})
export default connect(null, mdp)(Search);

