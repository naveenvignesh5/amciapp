import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {completeTest, retakeTest, updateQuestion} from '../redux';

import {QuestionItem, QuestionTimer, ResultCard, AppBar} from '../components';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export function Test({questions}) {
  const dispatch = useDispatch();

  const [startTest, setStartTest] = useState(false);

  const done = useSelector((state) => state.question.done);

  function handleRetake() {
    setStartTest(false);
    dispatch(retakeTest());
  }

  if (!startTest) {
    return (
      <View style={styles.centerContent}>
        <Button onPress={() => setStartTest(true)}>Start Test</Button>
      </View>
    );
  }

  if (done) {
    return (
      <View>
        <AppBar title="AMCI App" />
        <View style={styles.container}>
          <ResultCard questions={questions} />
          <Button onPress={handleRetake}>Re-take test</Button>
        </View>
      </View>
    );
  }

  return (
    <View>
      <AppBar title="AMCI App" />
      <View style={styles.container}>
        <QuestionTimer questions={questions} />
        <QuestionItem questions={questions} />
        <QuestionControl questions={questions} />
      </View>
    </View>
  );
}
