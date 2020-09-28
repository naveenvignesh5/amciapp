import {ACTIONS} from '../actionTypes';

export function updateQuestion(qIndex) {
  return {
    type: ACTIONS.UPDATE_QUESTION,
    qIndex,
  };
}

export function answerQuestion(qIndex, choice) {
  return {
    type: ACTIONS.ANSWER_QUESTION,
    qIndex,
    choice,
  };
}

export function retakeTest() {
  return {
    type: ACTIONS.RETAKE_TEST,
  };
}

export function completeTest() {
  return {
    type: ACTIONS.COMPLETE_TEST,
  };
}
