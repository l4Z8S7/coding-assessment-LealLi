import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import navigateReducer from './navigateReducer';
import answerReducer from './answerReducer';
import submitReducer from './submitReducer';

export default combineReducers({
  questions: questionsReducer,
  index: navigateReducer,
  answers: answerReducer,
  submitted: submitReducer
});