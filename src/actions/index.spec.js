import ConfigureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './index';
import * as types from './types';

const mockStore = ConfigureStore([reduxThunk]);

describe('actions', () => {
  it('should create action with questions data', () => {
    fetchMock.getOnce('questions.json', [{ title: 'Q1', options: { 'Opt1': 1, 'Opt2': 2} }]);
    const store = mockStore({ questions: [] });

    return store.dispatch(actions.fetchQuestions()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: types.FETCH_QUESTIONS,
        payload: [{ title: 'Q1', options: { 'Opt1': 1, 'Opt2': 2 } }]
      });
    });
  });

  it('should create action with type NXET_QUESTION', () => {
    expect(actions.nextQuestion()).toEqual({ type: types.NEXT_QUESTION });
  });

  it('should create action with type PREV_QUESTION', () => {
    expect(actions.prevQuestion()).toEqual({ type: types.PREV_QUESTION });
  });

  it('should create action with question number', () => {
    const index = 10;
    expect(actions.moveToQuestion(index)).toEqual({ type: types.MOVE_TO_QUESTION, payload: 10 });
  });

  it('should create action with answer and question index', () => {
    const index = 10, answer = 'A of Q10';
    expect(actions.selectAnswer(index, answer)).toEqual({ 
      type: types.SELECT_ANSWER, 
      payload: { index: 10, answer:'A of Q10' } 
    });
  });

  it('should create action with all answers', () => {
    const answers = ['A1', 'A2', 'A3'];
    expect(actions.submitAnswer(answers)).toEqual({ 
      type: types.SUBMIT_ANSWERS, 
      payload: ['A1', 'A2', 'A3']
    });
  });
});