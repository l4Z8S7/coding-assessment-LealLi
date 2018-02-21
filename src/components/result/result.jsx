import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './result.css';

export const Result = props => {
  return (
    <div className="result">
      <p>Congragulations, You have finished the assessment!</p>
      <p className="score">Your score is -- <span>{props.score}</span></p>
      <p>We will contact you when we have futher information.</p>
      <p>Thank you!</p>
    </div>
  );
}

function mapStateToProps({ questions, answers }) {
  const score = answers.map((answer, index) => answer ? questions[index].options[answer] : 0).reduce((a, b) => a + b, 0);
  return { score };
}

Result.propTypes = {
  score: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Result);