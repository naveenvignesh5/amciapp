import {ACTIONS} from '../actionTypes';

const initialState = {
  qIndex: 0,
  questions: [],
  answers: [],
  done: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_QUESTION:
      return {...state, qIndex: action.qIndex};
    case ACTIONS.ANSWER_QUESTION:
      const answers = [...state.answers];
      answers[action.qIndex] = action.choice;
      return {...state, answers};
    case ACTIONS.COMPLETE_TEST:
      return {...state, done: true};
    case ACTIONS.RETAKE_TEST:
      return initialState;
    default:
      return state;
  }
}
