import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {useTimer} from '../../hooks';
import {updateQuestion, completeTest} from '../../redux';

const styles = StyleSheet.create({
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  questionTimer: {
    marginLeft: 'auto',
  },
  timerText: {
    fontWeight: 'bold',
  },
});

const QUESTION_DURATION = 60; // seconds
const TRANSITION_DURATION = 5; // seconds

export function QuestionTimer({questions}) {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.question.answers);
  const qIndex = useSelector((state) => state.question.qIndex);

  const enableTransition = !!answers[qIndex];

  const questionTimer = useTimer(QUESTION_DURATION);
  const transitionTimer = useTimer(
    TRANSITION_DURATION,
    enableTransition && questionTimer.timeLeft > TRANSITION_DURATION,
  );

  useEffect(
    function () {
      const nextQIndex = qIndex + 1;

      if (!(questionTimer.timeLeft === 0 || transitionTimer.timeLeft === 0)) {
        return;
      }

      // reset the timer
      questionTimer.reset();
      transitionTimer.reset();

      if (nextQIndex === questions.length) {
        dispatch(completeTest());
        return;
      }

      dispatch(updateQuestion(qIndex + 1));
    },
    [qIndex, questionTimer, transitionTimer, questions, dispatch],
  );

  return (
    <View style={styles.timerContainer}>
      {enableTransition && (
        <Chip>
          Next Question in{' '}
          <Text style={styles.timerText}>{transitionTimer.timeLeft}</Text>
        </Chip>
      )}
      {/* <BaseTimer {...questionTimer} /> */}
      <Chip style={styles.questionTimer} icon="clock">
        Time Left:{' '}
        <Text style={styles.timerText}>{questionTimer.timeLeft}</Text>
      </Chip>
    </View>
  );
}
