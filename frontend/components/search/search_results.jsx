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
                      style={
                        community.profile_photo
                          ? {
                              backgroundImage: `url(${community.profile_photo})`,
                            }
                          : {
                            backgroundImage: `url("https://c8.patreon.com/2/200/c5055377")`,
                            }
                      }
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
                      {community.name}
                    </Link>
                    <div className="search-desc">
                      <span className="search-desc1">
                        {`creating ${community.short_description}`}
                      </span>
                    </div>
                  </div>
                  <div className="count">
                    <span className="count1">{community.members.length}</span>
                    <div className="plateron">
                      <span className="plateron1">
                        {community.members.length === 1
                          ? "Plateron"
                          : "Platerons"}
                      </span>
                    </div>
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