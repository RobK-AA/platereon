import React from 'react';

class LoginForm extends React.Component {
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
          <h3 className={`${this.props.formType}-form-header`} >{this.props.formName}</h3>
          <br />
          <div className={`${this.props.formType}-form`}>
            <br />
            <label htmlFor="password">Email</label>
              <input 
                id="email"
                type="text"
                autoComplete={this.state.email}
                value={this.state.email}
                onChange={this.update('email')}
                className={`${this.props.formType}-input`}
              />
            
            <br />
            <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password"
                autoComplete={this.state.password}
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-input`}
              />
            
            {this.renderErrors()}
            <br />
            <input className="session-submit" type="submit" value={this.props.formName} />
            
          </div>
        </form>
          <div className="other-form">
            <span className="login-link-text">Already have an account?
                  {this.props.navLink}
            </span> 
        </div>
      </div>
    );
  }
}

export default LoginForm;
