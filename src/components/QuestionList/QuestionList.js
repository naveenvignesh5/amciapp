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

  return (
    <View style={styles.container}>
      <QuestionItem qIndex={qIndex} question={QUESTIONS[qIndex]} />
      <Button
        icon="arrow-right"
        mode="contained"
        onPress={() => setQIndex((i) => i + 1)}>
        Next
      </Button>
    </View>
  );
}
