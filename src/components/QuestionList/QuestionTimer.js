import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {useTimer} from '../../hooks';
import {updateQuestion} from '../../redux';

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

export function QuestionTimer({qIndex, enableTransition}) {
  const dispatch = useDispatch();

  const questionTimer = useTimer(QUESTION_DURATION);
  const transitionTimer = useTimer(
    TRANSITION_DURATION,
    enableTransition && questionTimer > TRANSITION_DURATION,
  );

  if (questionTimer.timeLeft === 0 || transitionTimer.timeLeft === 0) {
    dispatch(updateQuestion(qIndex + 1));
  }

  return (
    <View style={styles.timerContainer}>
      {enableTransition && (
        <Chip>
          Next Question in{' '}
          <Text style={styles.timerText}>{transitionTimer.timeLeft}</Text>
        </Chip>
      )}
      <Chip style={styles.questionTimer} icon="clock">
        Time Left:{' '}
        <Text style={styles.timerText}>{questionTimer.timeLeft}</Text>
      </Chip>
    </View>
  );
}
