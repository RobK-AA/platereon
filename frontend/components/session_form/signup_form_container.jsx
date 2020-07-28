import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    formName: 'Sign up',
    navLink: <Link to="/login">Log in</Link>,
  };
};

const mdp = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(SessionForm);