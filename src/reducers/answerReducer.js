import { SELECT_ANSWER } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_ANSWER:
      const answers = [...state];
      const { payload: { index, answer } } = action;
      if (answers[index] !== answer) {
        answers[index] = answer;
        return answers;
      } else {
        return state;
      }
    default:
      return state;
  }
}