import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import Demo from './demo';


const mdp = dispatch => {
  return {
    demoLogin: user => dispatch(login(user))
  };
};

export default connect(null, mdp)(Demo);