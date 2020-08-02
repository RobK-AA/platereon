import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
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
  
    if (this.props.errors && this.props.location.pathname === "/login") {

      return (
        <ul id="session-errors-list">
          {this.props.errors.map((error, i) => (
            <li className="session-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
    
  }


  removeErrors() {
    const errors = document.getElementById('session-errors-list')
    if (errors) { errors.style.display = "none" };
  };

  render() {


    return (
      <div className={`${this.props.formType}-form-container`}>
        <h3 className={`${this.props.formType}-form-header`} >{this.props.formName}</h3>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <br />
          <div className={`${this.props.formType}-form`}>
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
