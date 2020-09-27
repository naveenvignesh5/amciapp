import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';

import {useTimer} from '../../hooks';

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
    flex: 1,
    fontWeight: 'bold',
  },
});

const QUESTION_DURATION = 60; // seconds
const TRANSITION_DURATION = 5; // seconds

export function QuestionTimer({enableTransition}) {
  const {timeLeft: questionTimer} = useTimer(QUESTION_DURATION);
  const {timeLeft: transitionTimer} = useTimer(
    TRANSITION_DURATION,
    enableTransition && questionTimer > TRANSITION_DURATION,
  );

  return (
    <View style={styles.timerContainer}>
      {enableTransition && (
        <Chip>
          Next Question in{' '}
          <Text style={styles.timerText}>{transitionTimer}</Text>
        </Chip>
      )}
      <Chip style={styles.questionTimer} icon="clock">
        Time Left: <Text style={styles.timerText}>{questionTimer}</Text>
      </Chip>
    </View>
  );
}
