import { 
  FETCH_QUESTIONS, 
  NEXT_QUESTION, 
  PREV_QUESTION, 
  MOVE_TO_QUESTION, 
  SELECT_ANSWER, 
  SUBMIT_ANSWERS 
} from './types';

export const fetchQuestions = () => dispatch => {
  return fetch('questions.json')
  .then(res => res.json())
  .then(data => dispatch({ type: FETCH_QUESTIONS, payload: data }));
};

export const nextQuestion = () => ({ type: NEXT_QUESTION });

export const prevQuestion = () => ({ type: PREV_QUESTION });

export const moveToQuestion = (index) => ({ type: MOVE_TO_QUESTION, payload: index });

export const selectAnswer = (index, answer) => ({ type: SELECT_ANSWER, payload: { index, answer } });

export const submitAnswer = (answers) => ({ type: SUBMIT_ANSWERS, payload: answers });
