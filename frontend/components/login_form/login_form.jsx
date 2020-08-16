import React from 'react';
import DemoContainer from '../demo/demo_container';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.highlightErrors = this.highlightErrors.bind(this);
  }

  update(field) {
    return (e) => {
      if (this.props.errors) this.props.clearErrors();
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  renderErrors() {
    this.highlightErrors();
    return (
      <ul id="session-errors-list" className="rendered-errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  highlightErrors() {
    if (Object.keys(this.state.errors).length > 0) {
      $('#session-form').css('border-color', 'red');
      $('#session-form').css('background-color', 'lightgray');
      $('#email').css('color', 'red');
      $('#password').css('color', 'red');
    }
    else {
      $('#session-form').css('border-color', '');
      $('#session-form').css('background-color', '');
      $('#email').css('color', '');
      $('#password').css('color', '');
    };
  }

  render() {


    return (
      <div className={`${this.props.formType}-form-container`}>
        <h3 className={`${this.props.formType}-form-header`} >{this.props.formName}</h3>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <br />
          <div id="session-form" className={`${this.props.formType}-form`}>
            <br />
            <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="text"
                autoComplete={this.state.email}
                value={this.state.email}
                onChange={this.update('email')}
                className={`${this.props.formType}-email-input`}
              />
            
            <br />
            <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password"
                autoComplete={this.state.password}
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-password-input`}
              />
            
            {this.renderErrors()}
            <br />
            <div className="session-submit">
              <DemoContainer />
            </div>
            <br />
            <input className="session-submit" type="submit" value={this.props.formName} />
            
          </div>
        </form>
          <div className="other-form-link">
            <span className="signup-link-text" >New to Platereon? 
              {/* <button className="signup-link-text" onClick={this.removeErrors()}> */}
                {this.props.navLink}
                {/* </button> */}
            </span> 
          </div>
      </div>
    );
  }
}

export default LoginForm;
