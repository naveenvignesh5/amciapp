import React, {useMemo} from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useSelector} from 'react-redux';

export function ResultCard({questions}) {
  const answers = useSelector((state) => state.question.answers);

  const correct = useMemo(
    function () {
      let count = 0;

      questions.forEach(function (q, qIndex) {
        if (q.answer === answers[qIndex]) {
          count += 1;
        }
      });

      return count;
    },
    [answers, questions],
  );

  return (
    <Card>
      <Card.Content>
        <Title>Result</Title>
        <Paragraph>{correct}</Paragraph>
      </Card.Content>
    </Card>
  );
}
