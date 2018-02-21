import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './card.css';
import * as actions from '../../actions';

export const Card =  (props) => {
    const options = Object.keys(props.question.options);
    return (
        <div className="card">
            <div 
                className="arrow arrow-left" 
                onClick={() => props.prevQuestion()}
                onKeyPress={(event) => event.key === "Enter" ? props.prevQuestion() : void(0)}  
                style={props.index === 0 ? { backgroundColor: "#848591", pointerEvents: "none" } : null}
                tabIndex="1"
            ><i className="fa fa-angle-left"></i></div>
            <div className="question">
                <div className="title">
                { props.question.title }
                </div>
                <ul className="options">
                {
                    options.map(option => <li 
                        key={option} 
                        onClick={() => props.selectAnswer(props.index, option)}
                        onKeyPress={(event) => event.key === "Enter" ? props.selectAnswer(props.index, option) : void(0)}
                        className={option === props.answer ? "selected" : ""} 
                        tabIndex="1"
                    ><span>{option}</span></li>)
                }
                </ul>
            </div>
            <div 
                className="arrow arrow-right" 
                onClick={() => props.nextQuestion()}
                onKeyPress={(event) => event.key === "Enter" ? props.nextQuestion() : void(0)} 
                tabIndex="1"
            ><i className="fa fa-angle-right"></i></div>
        </div>
    );
}

function mapStateToProps({ questions, index, answers }) {
    return { question: questions[index], answer: answers[index], index };
}

Card.propTypes = {
    question: PropTypes.object.isRequired,
    answer: PropTypes.string,
    index: PropTypes.number.isRequired,
    prevQuestion: PropTypes.func.isRequired,
    nextQuestion: PropTypes.func.isRequired,
    selectAnswer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, actions)(Card);