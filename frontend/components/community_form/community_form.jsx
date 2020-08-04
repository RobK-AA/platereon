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
      isPlural: false
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
                  defaultValue={`${this.props.currentUser.name}`}
                  onChange={this.update('name')}
                  className={`${this.props.formType}-name-input`}
                    />
              </div>
              <div className="short-desc-div">
                <div className="short-desc-col">
                  <label className="create-form-short-desc">What are you creating?</label>
                  <span>Required</span>
                </div>
                <input
                  type="text"
                  id="short-desc"
                  autoComplete={this.state.shortDesc}
                  defaultValue={`Cooking with ${this.props.currentUser.name} tutorials, pasta recipes, etc.`}
                  onChange={this.update('shortDesc')}
                  className={`${this.props.formType}-short-desc-input`}
                />
              </div>
              <div className="plural-div">
                <div className="plural-label-div">
                  <label className="plural-label">Which sounds more correct?</label>
                </div>
                <div className="plural-radio-div">
                  <fieldset name="isPlural">
                    <div className="inner-plural-div">
                      <div className="is-div">
                        <input name="isOrAre" id="is-creating" type="radio" readOnly className="is-creating" value="false" />

                        <div className="is-label">
                          <label htmlFor="">{`${this.props.currentUser.name}`}</label> <span className="isare">is creating</span>
                        </div>
                      </div>
                      <div className="are-div">
                        <input name="isOrAre" id="are-creating" type="radio" readOnly className="are-creating" value="true" />
                        <div className="are-label">

                          <label>{`${this.props.currentUser.name}`}</label> <span className="isare">are creating</span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="bronze-div">
                <div className="bronze-col">
                  <label className="create-form-short-desc">What are your perks for Bronze tier subscribers?</label>
                </div>
                <input
                  type="text"
                  id="short-desc"
                  autoComplete={this.state.bronzePerks}
                  defaultValue="Subscriber-only posts and messages"
                  onChange={this.update('bronzePerks')}
                  className="bronze-input"
                />
              </div>
              <div className="silver-div">
                <div className="silver-col">
                  <label className="create-form-short-desc">What are your perks for Silver tier subscribers?</label>
                </div>
                <input
                  type="text"
                  id="short-desc"
                  autoComplete={this.state.silverPerks}
                  defaultValue="Early access to content, subscriber-only voting power, all Bronze perks"
                  onChange={this.update('silverPerks')}
                  className="silver-input"
                />
              </div>
              <div className="gold-div">
                <div className="gold-col">
                  <label className="create-form-short-desc">What are your perks for Gold tier subscribers?</label>
                </div>
                <input
                  type="text"
                  id="short-desc"
                  autoComplete={this.state.goldPerks}
                  defaultValue="Full library access plus all Silver perks"
                  onChange={this.update('goldPerks')}
                  className="gold-input"
                />
              </div>
              <input type="submit" id="submit-form" />
            </form>
            
          </div>
          <div className="outer-about-div">
            <div className="about-div">
              <div className="inner-about-div">
                <span className="about-span">About your Platereon page</span>
                <div className="about-required">Required</div>
                <div className="about-description-div">
                  <p className="about-description">This is the first thing potential supporters will see
                  when they land on your page, so make sure you cook up a delicious
                  description of how they can join you on this adventure.
                      </p>
                </div>
                <div className="about-input">
                  <div className="about-editor-container">
                    <div className="editor-box">
                      <div contentEditable="true" dir="ltr" ></div>
                      <textarea name="about" id="about" cols="30" rows="10" className="about-textarea"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
};

export default CommunityForm;