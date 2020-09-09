import React from 'react';

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
    debugger
    return (
      <>
        <ul>
          {searchResults.map((community, i) => {
            debugger
            return (
            <li key={i}>
              <div>{community.name}</div>
            </li>
          )})}
        </ul>
      </>
    )
  }

  render() {
    
    return (
      <div>
        <div>Search Results</div>
        {this.renderSearchResults()}
      </div>
    )
  }
}

export default SearchResults;