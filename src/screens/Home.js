import React from 'react';
import {View} from 'react-native';

import {AppBar, QuestionList} from '../components';

export function Home() {
  return (
    <View>
      <AppBar title="AMCI App" />
      <QuestionList />
    </View>
  );
}
