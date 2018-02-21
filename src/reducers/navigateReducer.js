import { PREV_QUESTION, NEXT_QUESTION, MOVE_TO_QUESTION } from '../actions/types';

export default (state = -1, action) => {
  switch (action.type) {
    case PREV_QUESTION:
      return state - 1;
    case NEXT_QUESTION:
      return state + 1;
    case MOVE_TO_QUESTION:
      return action.payload;
    default:
      return state;
  }
}