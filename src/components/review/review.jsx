import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './review.css';
import * as actions from '../../actions';

 export const Review = (props) => { 
  return (
    <div className="review">
    <p className="title">Your Answers: </p>
      <ul className="answer-list">
        {
          props.answers.map((answer, index) => <li 
            key={index}
            style={answer ? null : { backgroundColor: "#e11f36" }}
            onClick={() => props.moveToQuestion(index)}
            onKeyPress={(event) => event.key === "Enter" ? props.moveToQuestion(index) : void(0)}
            tabIndex="1"
          >
            <span><b>{ index + 1 }</b> - <i>{ answer }</i></span>
          </li>)
        }
      </ul>
      <button className="btn-submit" onClick={() => props.submitAnswer(props.answers)}>Submit</button>
    </div>
  );
}

function mapStateToProps({ answers, index }) {
  const full_answers = [...answers];
  for (let i = 0; i < index; i ++) {
    if (!full_answers[i]) {
      full_answers[i] = '';
    }
  }
  return { answers: full_answers };
}

Review.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  moveToQuestion: PropTypes.func.isRequired,
  submitAnswer: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(Review);