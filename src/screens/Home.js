import React from 'react';
import {View} from 'react-native';

import {Title} from 'react-native-paper';

import {AppBar} from '../components';

export function Home() {
  return (
    <View>
      <AppBar title="AMCI App" />
      <Title>Home Page</Title>
    </View>
  );
}
