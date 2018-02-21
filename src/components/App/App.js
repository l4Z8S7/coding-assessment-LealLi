import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Welcome from '../welcome/welcome';
import Card from '../card/card';
import Review from '../review/review';
import Result from '../result/result';
import * as actions from '../../actions';

class App extends Component {
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

export default connect(mapStateToProps, actions)(App);
