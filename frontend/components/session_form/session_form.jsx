import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
  }

  renderErrors() {
    debugger
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3>{this.props.formType}</h3>
          <br />
          <div className="login-form">
            <br />
            <label>Email
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {/*this.renderErrors()*/}
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
