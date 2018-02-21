import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Welcome from '../welcome/welcome';
import Card from '../card/card';
import Review from '../review/review';
import Result from '../result/result';
import * as actions from '../../actions';

export class App extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  
  render() {
    return (
      <div className="App">
      {
        this.props.submitted ? <Result /> : 
        this.props.index === -1 ? <Welcome /> : 
        this.props.index === this.props.questions.length ? <Review /> : 
        <Card />
      }
      </div>
    );
  }
}

function mapStateToProps({ questions, index, submitted }) {
  return { questions, index, submitted };
}

App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  submitted: PropTypes.bool.isRequired,
  fetchQuestions: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(App);
