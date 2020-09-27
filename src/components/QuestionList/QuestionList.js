import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {QUESTIONS} from '../../mock/data';
import {retakeTest, updateQuestion} from '../../redux';

import {QuestionItem} from './QuestionItem';
// import {QuestionTimer} from './QuestionTimer';
import {ResultCard} from '../ResultCard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export function QuestionList() {
  const dispatch = useDispatch();

  const [done, setDone] = useState(false);

  const qIndex = useSelector((state) => state.question.qIndex);

  const finalQIndex = QUESTIONS.length - 1;

  function gotoNextQuestion() {
    if (qIndex === finalQIndex) {
      return;
    }

    dispatch(updateQuestion(qIndex + 1));
  }

  function gotoPreviousQuestion() {
    if (!qIndex) {
      return;
    }

    dispatch(updateQuestion(qIndex - 1));
  }

  function handleRetake() {
    dispatch(retakeTest());
    setDone(false);
  }

  return (
    <View style={styles.container}>
      {done ? (
        <ResultCard />
      ) : (
        <QuestionItem qIndex={qIndex} question={QUESTIONS[qIndex]} />
      )}
      {done ? (
        <Button onPress={handleRetake}>Re-take test</Button>
      ) : (
        <>
          {/* {qIndex !== 0 && (
            <Button
              icon="arrow-left"
              mode="contained"
              onPress={gotoPreviousQuestion}>
              Prev
            </Button>
          )} */}
          {qIndex !== finalQIndex ? (
            <Button
              icon="arrow-right"
              mode="contained"
              onPress={gotoNextQuestion}>
              Next
            </Button>
          ) : (
            <Button onPress={() => setDone(true)} mode="contained">
              Done
            </Button>
          )}
        </>
      )}
    </View>
  );
}
