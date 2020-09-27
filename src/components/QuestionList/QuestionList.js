import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {QUESTIONS} from '../../mock/data';

import {QuestionItem} from './QuestionItem';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export function QuestionList() {
  const [qIndex, setQIndex] = useState(0);

  function gotoNextQuestion() {
    if (qIndex === QUESTIONS.length - 1) {
      return;
    }

    setQIndex((i) => i + 1);
  }

  return (
    <View style={styles.container}>
      <QuestionItem
        qIndex={qIndex}
        question={QUESTIONS[qIndex]}
        onTimerEnd={(t1, t2) => {
          if (t1 === 0 || t2 === 0) {
            gotoNextQuestion();
          }
        }}
      />
      <Button icon="arrow-right" mode="contained" onPress={gotoNextQuestion}>
        Next
      </Button>
    </View>
  );
}
