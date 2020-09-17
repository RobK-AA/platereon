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
        {/* <ul className="search-results-list"> */}
          {searchResults.map((community, i) => {
            
            return (
              <div className="search-item2" key={`search-item2-${i}`}>
                <div className="search-item1" key={`search-item2-${i}`}>
                  <Link
                    className="result-icon"
                    key={`result-icon-${i}`}
                    to={`/communities/${community.id}`}
                  >
                    <div
                      className="result-icon1"
                      key={`result-icon1-${i}`}
                    ></div>
                  </Link>
                  <div className="result-name" key={`result-name-${i}`}>
                    <Link
                      className="search-results-list-item"
                      key={`community-${i}`}
                      to={`/communities/${community.id}`}
                    >
                      {/* <li className="search-results-list-item" key={i}> */}
                      {community.name}
                      {/* </li> */}
                    </Link>
                  </div>
                </div>
              </div>
            );})}
        {/* </ul> */}
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
                <h5 className="results-header">Search "{search.slice(2, search.length)}"</h5>
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