import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {retakeTest, updateQuestion} from '../../redux';

import {QuestionItem} from './QuestionItem';
// import {QuestionTimer} from './QuestionTimer';
import {ResultCard} from '../ResultCard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export function QuestionList({questions}) {
  const dispatch = useDispatch();

  const [done, setDone] = useState(false);

  const qIndex = useSelector((state) => state.question.qIndex);

  function handleRetake() {
    dispatch(retakeTest());
    setDone(false);
  }

  if (done) {
    return (
      <View style={styles.container}>
        <ResultCard questions={questions} />
        <Button onPress={handleRetake}>Re-take test</Button>
      </View>
    );
  }

  const finalQIndex = questions.length - 1;

  function gotoNextQuestion() {
    if (qIndex === finalQIndex) {
      return;
    }

    dispatch(updateQuestion(qIndex + 1));
  }

  return (
    <View style={styles.container}>
      <QuestionItem qIndex={qIndex} question={questions[qIndex]} />
      <>
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
    </View>
  );
}
