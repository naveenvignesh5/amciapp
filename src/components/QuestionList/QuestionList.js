import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {completeTest, retakeTest, updateQuestion} from '../../redux';

import {QuestionItem} from './QuestionItem';
import {QuestionTimer} from './QuestionTimer';
import {ResultCard} from '../ResultCard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

function QuestionControl({questions}) {
  const dispatch = useDispatch();

  const qIndex = useSelector((state) => state.question.qIndex);

  const finalQIndex = questions.length - 1;

  function gotoNextQuestion() {
    if (qIndex === finalQIndex) {
      return;
    }

    dispatch(updateQuestion(qIndex + 1));
  }

  return (
    <>
      {qIndex !== finalQIndex ? (
        <Button icon="arrow-right" mode="contained" onPress={gotoNextQuestion}>
          Next
        </Button>
      ) : (
        <Button onPress={() => dispatch(completeTest())} mode="contained">
          Done
        </Button>
      )}
    </>
  );
}

export function QuestionList({questions}) {
  const dispatch = useDispatch();

  const done = useSelector((state) => state.question.done);

  function handleRetake() {
    dispatch(retakeTest());
  }

  if (done) {
    return (
      <View style={styles.container}>
        <ResultCard questions={questions} />
        <Button onPress={handleRetake}>Re-take test</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <QuestionTimer questions={questions} />
      <QuestionItem questions={questions} />
      <QuestionControl questions={questions} />
    </View>
  );
}
