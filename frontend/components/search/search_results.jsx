import React from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  constructor(props) {
    
    super(props)
    this.renderSearchResults = this.renderSearchResults.bind(this);
    
  }

  // componentDidMount() {
  //   this.renderSearchResults();
  // }

  renderSearchResults() {
    const { searchResults } = this.props;
    
    return (
      <>
        <ul className="search-results-list">
          {searchResults.map((community, i) => {
            
            return (
              <Link key={`community-${i}`} to={`/api/communities/${community.id}`}>
                <li className="search-results-list-item" key={i}><div>{community.name}</div></li>
              </Link>
          )})}
        </ul>
      </>
    )
  }

  render() {
    const { search } = this.props.location
    return (
      <div id="search-results4">
        <div id="search-results3">
          <div id="search-results2">
            <div id="search-results1">
              <div className="results-header-container">
                <h3 className="results-header">Results: "{search.slice(2, search.length)}"</h3>
              </div>
              {this.renderSearchResults()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResults;