import { SUBMIT_ANSWERS } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case SUBMIT_ANSWERS:
      return true;
    default:
      return state;
  }
}