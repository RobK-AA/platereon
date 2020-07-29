import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {

    

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {

    

    e.preventDefault();
    this.props.submitForm(this.state);
  }

  renderErrors() {
    
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
    
  }

  render() {
    return (
      <div className={`${this.props.formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3 className={this.props.formType}>{this.props.formName}</h3>
          <br />
          <div className={`${this.props.formType}-form`}>
            <br />
            <label>Email
              <input type="text"
                autoComplete={this.state.email}
                value={this.state.email}
                onChange={this.update('email')}
                className={`${this.props.formType}-input`}
              />
            </label>
            <br />
            <label>Password
              <input type="password"
                autoComplete={this.state.password}
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-input`}
              />
            </label>
            {this.renderErrors()}
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            {
            this.props.formType === 'login' ? 
                <p>New to Platereon? {this.props.navLink}</p>  :
                <p>Already have an account? {this.props.navLink}</p> 
            }
            
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
