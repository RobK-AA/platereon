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
      shortDesc: '',
      isOrAre: 'is'
    };
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
                <label type="submit" htmlFor="submit-form">Launch</label>
              </div>
            </div>
          </div>
          <div className="create-form-intro">
            <h3 className="create-form-basics-tiers">Basics and Tiers</h3>
            <p className="create-form-set-details">
              Set your creator details and choose what to offer your subscribers
            </p>
          </div>
          <div className="create-form-case">
            <form onSubmit={this.handleSubmit}>
              <div className="name-div">
                <div className="name-col">
                  <label className="create-form-name">Name of Platereon page</label>
                  <span>Required</span>
                </div>
                <input 
                  type="text"
                  id="name"
                  autoComplete={this.state.name}
                  value={this.state.name}
                  onChange={this.update('name')}
                  className={`${this.props.formType}-name-input`}
                    />
              </div>
              <div className="short-desc-div">
                <label className="create-form-short-desc">What are you creating?</label>
                <span>Required</span>
                <input
                  type="text"
                  id="short-desc"
                  autoComplete={this.state.shortDesc}
                  value={this.state.shortDesc}
                  onChange={this.update('shortDesc')}
                  classshortDesc={`${this.props.formType}-short-desc-input`}
                />
              </div>
              <label htmlFor="">Which sounds more correct?</label>
              <input
                type="radio"
                id="short-desc"
                value="hi"
                onChange={this.update('isOrAre')}
                classshortDesc={`${this.props.formType}-isorare-input`}
              />
              <input type="submit" id="submit-form" />
            </form>
          </div>
          
        </div>
      )
    }
};

export default CommunityForm;