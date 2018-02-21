import React, { Component } from 'react';
import './App.css';
import Welcome from './welcome/welcome';
import Card from './card/card';
import Review from './review/review';
import Result from './result/result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      current_index: -1,
      submitted: false
    }
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  componentDidMount() {
    fetch('questions.json')
    .then(res => res.json())
    .then(data => {
      this.setState({ questions: data, answers: new Array(data.length).fill("") });
    });
  }

  selectAnswer(answer) {
    const answers = [...this.state.answers];
    if (answers[this.state.current_index] !== answer) {
      answers[this.state.current_index] = answer;
      this.setState({ answers });
    }
  }

  _caculateScore() {
    return this.state.answers.map((answer, index) => {
      if (answer) {
        return this.state.questions[index].options[answer];
      } else {
        return 0;
      }
    }).reduce((a, b) => a + b, 0);
  }

  renderContent(index) {
    if (this.state.submitted) {
      return <Result score={this._caculateScore()}/>
    }
    const total_index = this.state.questions.length;
    if (index === -1) {
      return <Welcome startAs={() => this.setState({ current_index: 0 })}/>;
    } else if (index === total_index) {
      return <Review 
        answers={this.state.answers} 
        returnTo={index => this.setState({ current_index: index })}
        submitAs={() => this.setState({ submitted: true })}
      />;
    } else {
      return <Card
        question={this.state.questions[index]}
        answer={this.state.answers[index]}
        prevQs={() => this.setState({ current_index: this.state.current_index - 1 })}
        nextQs={() => this.setState({ current_index: this.state.current_index + 1 })}
        selectAs={this.selectAnswer}
        index={index}
      />;
    }
  }

  render() {
    return (
      <div className="App">
        { this.renderContent(this.state.current_index) }
      </div>
    );
  }
}

export default App;
