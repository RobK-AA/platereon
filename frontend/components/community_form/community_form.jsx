import React from 'react';

class CommunityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      creatorId: '',
      bronzePerks: '',
      silverPerks: '',
      goldPerks: '',
      numSubs: '',
      backgroundNum: '',

    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitCommunity(this.state)
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  };

  render() {
    return (
      null
    )
  }
}

export default CommunityForm;