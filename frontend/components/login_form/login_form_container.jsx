import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    formName: 'Log in',
    navLink: <Link to="/signup">Sign up</Link>,
  };
};

const mdp = dispatch => {

  

  return {
    submitForm: user => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(LoginForm);