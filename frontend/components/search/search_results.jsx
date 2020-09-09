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
    
    return (
      <div>
        <div className="results-header">Search Results</div>
        {this.renderSearchResults()}
      </div>
    )
  }
}

export default SearchResults;