import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './welcome.css';
import * as actions from '../../actions';

const Welcome =  (props) => {
  return (
    <div className="welcome">
      <p>Welcome to the assessment!</p>
      <button onClick={() => props.nextQuestion()}>Start <i className="fa fa-forward"></i></button>
    </div>
  );
}

Welcome.propTypes = {
  nextQuestion: PropTypes.func.isRequired
}

export default connect(null, actions)(Welcome);