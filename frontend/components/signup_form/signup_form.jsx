import React from 'react';
import DemoContainer from '../demo/demo_container';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.highlightErrors = this.highlightErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) => {
      if (this.props.errors) this.props.clearErrors();
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    const { password, confirmPassword } = this.state;
    e.preventDefault();
    if (password === confirmPassword ) {
      this.props.submitForm(this.state) 
      } else {
        return (
          <div>
            <ul className='confirm-password-errors'>
              <alert>Passwords must match</alert>
            </ul>
          </div>
        )
  
      }
  };
  
  renderErrors() {
    this.highlightErrors();
    return (
      <ul className="rendered-errors-list">
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
      $('#name').css('color', 'red')
      $('#email').css('color', 'red')
      $('#password').css('color', 'red')
      $('#confirm-password').css('color', 'red')
    }
    else {
      $('#session-form').css('border-color', '');
      $('#session-form').css('background-color', '');
      $('#name').css('color', '')
      $('#email').css('color', '')
      $('#password').css('color', '')
      $('#confirm-password').css('color', '')
    };
  }

  render() {

    return (
      <div className={`${this.props.formType}-form-container`}>
        <h3 className={`${this.props.formType}-form-header`} >{this.props.formName}</h3>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          
          <br />
          <div id="session-form" className={`${this.props.formType}-form`}>
            <br />
            <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                autoComplete={this.state.name}
                value={this.state.name}
                onChange={this.update('name')}
                className={`${this.props.formType}-input`}
            />
            <br />
            <label htmlFor="email">Email</label>
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

            <br />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              autoComplete={this.state.confirmPassword }
              value={this.state.confirmPassword }
              onChange={this.update('confirmPassword')}
              className={`${this.props.formType}-input`}
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
          <div className="other-form">
            <span className="signup-link-text" >Already have an account?
                {/* <button className="signup-link-text" onClick={this.removeErrors()}> */}
                  {this.props.navLink}
                {/* </button> */}
            </span> 
        </div>
      </div>
    );
  }
};

export default SignupForm;
