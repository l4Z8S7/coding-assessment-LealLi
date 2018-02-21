import * as types from '../actions/types';
import questionsReducer from './questionsReducer';
import navigateReducer from './navigateReducer';
import answerReducer from './answerReducer';
import submitReducer from './submitReducer';

describe('reducers', () => {
  it('should return questions', () => {
    expect(questionsReducer(undefined, { 
      type: types.FETCH_QUESTIONS, 
      payload: [{ title: 'Q1', options: { 'Opt1': 1, 'Opt2': 2} }]
    })).toEqual([{ title: 'Q1', options: { 'Opt1': 1, 'Opt2': 2} }]);
  });

  it('should correctly navigate among questions', () => {
    expect(navigateReducer(0, { type: types.NEXT_QUESTION })).toEqual(1);
    expect(navigateReducer(1, { type: types.PREV_QUESTION })).toEqual(0);
    expect(navigateReducer(0, { type: types.MOVE_TO_QUESTION, payload: 10 })).toEqual(10);
  });

  it('should set answer of a certain question', () => {
    expect(answerReducer(undefined, { 
      type: types.SELECT_ANSWER, 
      payload: { index: 0, answer: 'A1 of Q1' }
    })).toEqual(['A1 of Q1']);

    expect(answerReducer(['A1 of Q1'], { 
      type: types.SELECT_ANSWER, 
      payload: { index: 2, answer: 'A3 of Q3' }
    })).toEqual(['A1 of Q1', undefined, 'A3 of Q3']);
  });

  it('should return status of submittion', () => {
    expect(submitReducer(undefined, { type: types.SUBMIT_ANSWERS })).toEqual(true);
  })
});