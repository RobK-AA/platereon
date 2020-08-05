import React from 'react';
import {BrowserRouter } from 'react-router-dom';

class Community extends React.Component {
  constructor(props) {
    super(props);
    const name = this.props.community.name || "";
    const description = this.props.community.description || "";
    const shortDesc = this.props.community.short_description || "";
    const goldPerks = this.props.community.gold_perks || "";
    const silverPerks = this.props.community.silver_perks || "";
    const bronzePerks = this.props.community.bronze_perks || "";
    const isPlural = this.props.community.plural || "";
    const creatorId = this.props.community.creator_id || "";

    this.state = {
      name,
      description,
      shortDesc,
      goldPerks,
      silverPerks,
      bronzePerks,
      isPlural,
      creatorId
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.setState({
  //       prevState
  //     })
  //   }
  // }

  componentDidMount() {
    this.props.fetchCommunity(this.props.match.params.communityId)
  };

  render() {
    
    
    // const name = this.props.community.name || "";
    // const description = this.props.community.description || "";
    // const gold = this.props.community.gold_perks || "";
    // const silver = this.props.community.silver_perks || "";
    // const bronze = this.props.community.bronze_perks || "";
    const { name, 
            description, 
            shortDesc, 
            goldPerks, 
            bronzePerks, 
            silverPerks,
            isPlural, 
            creatorId 
    } = this.state
   
    

    return(
      <div>
        <h3>COMMUNITY PAGE</h3>
          <p>{`This is a community page for ${name}`}</p>
          <p>{`Description: ${description}`}</p>
          <p>{`Bronze Perks: ${bronzePerks}`}</p>
          <p>{`Silver Perks: ${silverPerks}`}</p>
          <p>{`Gold Perks: ${goldPerks}`}</p>
      </div>
    )
  }
}

export default Community;