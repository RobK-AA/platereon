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
      goldPerks: ''
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
        <div className="create-form">
          <div className="create-form-nav">
            <div className="create-form-nav-left">
              <div className="create-form-basics">
                <div>Basics</div>
              </div>
              <div className="create-form-tiers">
                <div>Tiers</div>
              </div>
              <div className="create-form-merch">
                <div>Merch</div>
              </div>
              <div className="create-form-getting-paid">
                <div>Getting Paid</div>
              </div>
              <div className="create-form-page-settings">
                <div>Page Settings</div>
              </div>
              <div className="create-form-preview">
                <div>Preview</div>
              </div>
              <div className="create-form-advanced"> 
                <div>Advanced</div>
              </div>
            </div>
            <div className="create-form-nav-right">
              <div className="create-form-launch">
                <button type="submit">Launch</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
};

export default CommunityForm;