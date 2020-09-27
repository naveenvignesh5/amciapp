import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Card, List, RadioButton, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {answerQuestion} from '../../redux';

const styles = StyleSheet.create({
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export function QuestionItem({question, qIndex}) {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.question.answers);

  const [choice, setChoice] = useState('');

  const handleChoiceSelect = (ch) => {
    dispatch(answerQuestion(qIndex, ch));
    setChoice(ch);
  };

  useEffect(
    function () {
      setChoice(answers[qIndex]);
    },
    [qIndex, answers],
  );

  return (
    <Card key={`question-${qIndex}`}>
      <Card.Content>
        <List.Section>
          <Text style={styles.question}>
            {qIndex + 1}. {question.question}
          </Text>
          {question.choices.map((ch, cIndex) => {
            const isChecked =
              choice && choice.toLowerCase() === ch.toLowerCase();
            return (
              <List.Item
                key={`choice-${qIndex}-${cIndex}`}
                title={ch}
                right={(props) => (
                  <RadioButton.Android
                    value={ch}
                    status={isChecked ? 'checked' : 'unchecked'}
                    onPress={() => handleChoiceSelect(ch)}
                  />
                )}
              />
            );
          })}
        </List.Section>
      </Card.Content>
    </Card>
  );
}
