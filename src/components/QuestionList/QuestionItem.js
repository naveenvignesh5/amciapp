import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Card, List, RadioButton, Text} from 'react-native-paper';

const styles = StyleSheet.create({
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export function QuestionItem({question, qIndex}) {
  const [choice, setChoice] = useState(null);

  const handleChoiceSelect = (ch) => {
    setChoice(ch);
  };

  return (
    <Card>
      <Card.Content>
        <List.Section>
          <Text style={styles.question}>{question.question}</Text>
          {question.choices.map((ch, cIndex) => (
            <List.Item
              key={`${qIndex}-${cIndex}`}
              title={ch}
              right={(props) => (
                <RadioButton.Android
                  disabled={choice !== null}
                  value={ch}
                  status={choice === ch ? 'checked' : 'unchecked'}
                  onPress={() => handleChoiceSelect(ch)}
                />
              )}
            />
          ))}
        </List.Section>
      </Card.Content>
    </Card>
  );
}
